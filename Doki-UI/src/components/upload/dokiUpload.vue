<script setup lang="ts">
import {ref, useAttrs} from "vue";

import deleteIcon from "./public/delete.svg"
import axios from "axios";
import DokiProgress from "../progress/dokiProgress.vue";
import dokiMessage from "../message/methods.ts";

const props = defineProps<{
  beforeUpload?: (rawFile: File) => boolean
  onProgress?: (rawFile: File) => any
  onSuccess?: (response: any, rawFile: File) => any
  onFail?: (e: Error, rawFile) => any
  onDelete?: (rawFile: File) => any
}>()

const draggable = ref(useAttrs().drag === "")

const fileInput = ref<HTMLInputElement | null>(null);
const fileList = ref<File[]>([]);

const multiple = ref(useAttrs().multiple === "");
const action = ref(useAttrs().action ? useAttrs().action : "api/")
// console.log(multiple.value)

let updateInfo = ref<{progress: number, status: stirng}[]>([])

const updateFileList = () => {
  // console.log(props.beforeUpload && !props.beforeUpload(fileInput.value.files[0]))
  if (props.beforeUpload && !props.beforeUpload(fileInput.value.files[0])) {
    return;
  }
  fileList.value.length = 0

  if (fileInput.value && fileInput.value.files) {
    // Convert FileList to an array for easier manipulation
    fileList.value = Array.from(fileInput.value.files);
  }


  for (let i = 0; i < fileList.value.length; i++) {
    upload(fileList.value[i], i)
  }

  // console.log(updateInfo.value)
};


const click = () => {
  fileInput.value?.click()
}

const deleteFile = (event: Event) => {
  const target = event.target as HTMLElement;
  const file = target.parentElement as HTMLElement;


  if (file.textContent) {
    for  (let i = 0; i < fileList.value.length; i++) {
      // console.log(file.textContent);
      // console.log(fileList.value[i].name);

      if (fileList.value[i].name == file.textContent.trim()) {
        if (props.onDelete) props.onDelete(fileList.value[i])
        fileList.value.splice(i, 1)
        break
      }
    }


  }

}



function upload(file: File, index: number) {
  const progress = ref(0)
  const status = ref("")

  const formData = new FormData()
  formData.append("name", file.name)
  formData.append("files", file)

  // console.log([...formData.entries()])
  // 存储进度信息
  updateInfo.value.push({
    progress: 0,
    status: "",
  })

  axios.post(action.value as string, formData, {
    timeout: 1000 * 6 * 60,
    onUploadProgress: function progress(event: any) {
      if (event.lengthComputable) {
        progress.value = Math.floor(event.loaded / event.total * 100)
        // console.log(`上传进度：${progress.value}%`);
        // 更新进度信息
        updateInfo.value[index] = {
          progress: progress.value,
          status: status.value,
        }
      }

      if (props.onProgress) props.onProgress(file)
    }
  })
      .then((response) => {
        // console.log("success")
        status.value = "success"
        updateInfo.value[index] = {
          progress: 100,
          status: status.value,
        }

        if (props.onSuccess) props.onSuccess(response, file)
      })
      .catch((e: Error) => {
        // console.log("fail")
        status.value = "fail"
        updateInfo.value[index] = {
          progress: progress.value,
          status: status.value,
        }
        console.log(e)

        if (props.onFail) props.onFail(e, file)

        if (e.message.startsWith("timeout")) {
          dokiMessage({
            type: "danger",
            message: "File upload timeout.",
          })
        }

      })


}


</script>

<template>
  <div class="doki-upload__drag" v-if="draggable">

  </div>
  <div class="doki-upload" v-else>
<!--    文件选择框-->
    <div class="trigger" @click="click">
      <slot name="trigger"></slot>
    </div>
<!--    描述-->
    <div class="description">
      <slot name="description"></slot>
    </div>

    <div class="file-list" v-for="(file, index) in fileList" :key="file.name">
      <div class="file">
        {{ file.name }}
        <img :src="deleteIcon" alt="delete" class="delete-icon" @click="deleteFile">
      </div>
      <doki-progress :percentage="updateInfo[index].progress" :status="updateInfo[index].status"/>
    </div>

    <input ref="fileInput" type="file" @change="updateFileList" :multiple="multiple"/>
  </div>


</template>

<style scoped>

</style>