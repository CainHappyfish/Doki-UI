<script setup lang="ts">
import avatar from "./public/avatar-aimi.jpg"
import DokiPageHeader from "../components/pageHeader/dokiPageHeader.vue";

const data = [
  {
    label: "Poppin' Party",
    url: "https://mzh.moegirl.org.cn/Poppin%27Party"
  },
  {
    label: "户山香澄",
    url: "https://mzh.moegirl.org.cn/%E6%88%B7%E5%B1%B1%E9%A6%99%E6%BE%84"
  },
  {
    label: "简介",
  }
]
</script>

<template>
  <div class="page-header-container">
    <h2 class="title-2">Page Header</h2>
    <doki-page-header>
      <template #breadcrumb>
        <doki-breadcrumb :items="data" />
      </template>
      <template #title>
        <doki-avatar :src="avatar" size="40"/>
        <div class="title">
          Kasumi
        </div>
        <div class="subtitle">
          aimi
        </div>
        <doki-tag type="primary">Guitar & Vocal</doki-tag>
      </template>
      <template #content>
        <div class="content">
          Poppin'Party乐队的主唱兼吉他手。喜欢冒险和唱卡拉OK。

          喜欢的食物是炸薯条、白米饭，讨厌纳豆。完全是中之人的逆输入

          就读于花咲川女子学园。

          有着积极乐观的性格。

          做事冲动莽撞，常有令人诧异的举动。例如当DD
          极度怕鬼，尤其是在牛込里美提到跟鬼有关的话题时。

          害怕坐飞机，坐飞机时需要里美和有咲左右护法才能稳定情绪。

          曾经不擅长游泳动画第一季时差点在学校泳池溺水，但在手游160期活动中已经能够游泳和潜水。题外话，香澄身为本企划主角，泳装只有4套（含第一季死库水）

          家庭成员有4人，有1个小1年的妹妹，但是一眼看过去却分不清谁是姐姐谁是妹妹。

          妹妹户山明日香的生肖是薮猫。

          发型本意是星星形状，但一眼看去总会被认为是猫耳。<em>凑友希那诱捕器也有人认为那是粽子</em>

          升上高三后，开始在LIVE HOUSE RiNG打工。

          乐器：ESP RANDOM STAR

          姓氏「户山」来自东京都新宿区户山町。

        </div>
      </template>
    </doki-page-header>
  </div>
</template>

<style scoped>
.page-header-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}

.title {
  font-weight: bold;
  font-family: "Microsoft YaHei UI Light", sans-serif;

  font-size: 20px;

  margin: 0 10px;
}

.subtitle {
  font-family: "Microsoft YaHei UI Light", sans-serif;

  font-size: 16px;

  margin: 0 10px;
}

.doki-tag {
  margin: 0 10px;

}

.content {
  font-family: "Microsoft YaHei UI Light", sans-serif;
  font-size: 16px;

}
</style>