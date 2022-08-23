<template>
  <view class="content">
    <view class="text-area">
      <RoundBall />
      <div>已消费：3760.54</div>
      <div>距离结算日，您每日还可霍霍623.946元哟</div>
    </view>
    <DoughnutChart></DoughnutChart>
  </view>
</template>

<script setup lang="ts">
import RoundBall from "../../components/roundBall/index.vue";
import DoughnutChart from "../../components/doughnutChart/index.vue";
// import { ref } from 'vue'
// const title = ref('Hello')
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
