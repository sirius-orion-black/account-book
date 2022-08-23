<template>
  <view class="doghunt_chart" id="doughuntChart">asd</view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as echarts from "echarts";

export default defineComponent({
  name: "DoughnutChart",
  setup() {},
  mounted() {
    type EChartsOption = echarts.EChartsOption;
    const chartDom = document.getElementById("doughuntChart")!;
    const myChart = echarts.init(chartDom);
    let option: EChartsOption;
    option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "40",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
        },
      ],
    };
    option && myChart.setOption(option);
    // let chart = this.$echarts.
  },
});

// option && myChart.setOption(option);
</script>

<style lang="scss">
.doghunt_chart {
  width: 100%;
  height: 420rpx;
  padding: 20rpx;
}
</style>
