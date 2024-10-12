<script setup lang="ts">

import {ref} from "vue";
import DokiVirtualList from "../components/virtualList/dokiVirtualList.vue";

const listItems = ref(new Array(100).fill(0))
for (let i = 0; i < listItems.value.length; i++) {
  listItems.value[i] = i+1
}
const banGDreamList = ref([
  {
    url: "https://img.moegirl.org.cn/common/thumb/2/29/Bandori_Kasumi_icon.png/60px-Bandori_Kasumi_icon.png",
    name: "户山香澄",
    bang: "Poppin' Party"
  },
  {
    url: "https://img.moegirl.org.cn/common/thumb/5/56/Bandori_Tae_icon.png/60px-Bandori_Tae_icon.png",
    name: "花园多惠",
    bang: "Poppin' Party"
  },
  {
    url: "https://img.moegirl.org.cn/common/thumb/e/e2/Bandori_Rimi_icon.png/60px-Bandori_Rimi_icon.png",
    name: "牛込里美",
    bang: "Poppin' Party"
  },
  {
    url: "https://img.moegirl.org.cn/common/thumb/0/02/Bandori_Saaya_icon.png/60px-Bandori_Saaya_icon.png",
    name: "山吹沙绫",
    bang: "Poppin' Party"
  },
  {
    url: "https://img.moegirl.org.cn/common/thumb/3/38/Bandori_Arisa_icon.png/60px-Bandori_Arisa_icon.png",
    name: "市谷有咲",
    bang: "Poppin' Party"
  },
  {
    url: "https://img.moegirl.org.cn/common/thumb/c/cc/Bandori_Yukina_icon.png/60px-Bandori_Yukina_icon.png",
    name: "凑友希那",
    bang: "Roselia"
  },
  {
    url: "https://img.moegirl.org.cn/common/thumb/4/4f/Bandori_Sayo_icon.png/60px-Bandori_Sayo_icon.png",
    name: "冰川纱夜",
    bang: "Roselia"
  },
  {
    url: "https://img.moegirl.org.cn/common/thumb/1/12/Bandori_Lisa_icon.png/60px-Bandori_Lisa_icon.png",
    name: "今井莉莎",
    bang: "Roselia"
  },
  {
    url: "https://img.moegirl.org.cn/common/thumb/9/96/Bandori_Ako_icon.png/60px-Bandori_Ako_icon.png",
    name: "宇田川亚子",
    bang: "Roselia"
  },
  {
    url: "https://img.moegirl.org.cn/common/thumb/7/72/Bandori_Rinko_icon.png/60px-Bandori_Rinko_icon.png",
    name: "白金燐子",
    bang: "Roselia"
  },
  {
    url: "https://img.moegirl.org.cn/common/thumb/8/8b/Takamatsu_Tomori_icon.png/60px-Takamatsu_Tomori_icon.png",
    name: "高松灯",
    bang: "Mygo!!!!!"
  },
  {
    url: "https://img.moegirl.org.cn/common/thumb/d/d2/Chihaya_Anon_icon.png/60px-Chihaya_Anon_icon.png",
    name: "千早爱音",
    bang: "Mygo!!!!!"
  },
  {
    url: "https://img.moegirl.org.cn/common/thumb/a/aa/Kaname_R%C4%81na_icon.png/60px-Kaname_R%C4%81na_icon.png",
    name: "要乐奈",
    bang: "Mygo!!!!!"
  },
  {
    url: "https://img.moegirl.org.cn/common/thumb/3/30/Nagasaki_Soyo_icon.png/60px-Nagasaki_Soyo_icon.png",
    name: "长崎爽世",
    bang: "Mygo!!!!!"
  },{
    url: "https://img.moegirl.org.cn/common/thumb/8/8c/Shiina_Taki_icon.png/60px-Shiina_Taki_icon.png",
    name: "椎名立希",
    bang: "Mygo!!!!!"
  },



])

</script>

<template>
  <div class="virtual-list-container">
    <h2 class="title-2">Infinite Loading</h2>
    <div class="vl-container">
      <doki-virtual-list height="800">

          <div class="vl-preview" v-for="item in listItems">
            {{ item }}
          </div>

      </doki-virtual-list>
    </div>

    <div class="vl-container">
      <doki-virtual-list height="500" width="420">

        <div class="bangdream-preview" v-for="item in banGDreamList">
          <div class="preview-img">
            <img :src="item.url" alt="logo">
          </div>

          <div class="info">
            <div class="name">{{ item.name }}</div>
            <div class="bang">{{ item.bang }}</div>
          </div>
        </div>

      </doki-virtual-list>
    </div>




  </div>
</template>

<style scoped>
.virtual-list-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  //flex-direction: column;
  gap: 20px;
  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}

.vl-container {
  margin: 10px 0;
}

.vl-preview {
  height: 70px;
  background: #55DDEE;
  color: white;

  font-family: "Microsoft YaHei UI Light", sans-serif;
  font-size: 36px;
  text-align: center;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;

}

.bangdream-preview {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  align-content: center;
  height: 100px;

  font-family: "Microsoft YaHei UI Light", sans-serif;

  .preview-img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
  }

  img {
    width: 80px;
    height: 80px;
  }

  .info {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}


</style>