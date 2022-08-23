<template>
  <view class="me_content">
    <view class="me_money">
      <div class="me_net_asset">
        <div class="title">
          <uni-icons
            custom-prefix="meicon"
            type="me-netasset"
            size="30"
            color="ff6699"
          ></uni-icons>
          <span class="label">净资产</span>
        </div>
        <div class="money">2300000</div>
      </div>
      <div class="me_net_other">
        <div class="me_net_tatal">
          <div class="title">
            <uni-icons
              custom-prefix="meicon"
              type="me-tatalassets"
              size="30"
              color="ff6699"
            ></uni-icons>
            <span class="label">总资产</span>
            <span class="label">3000000</span>
          </div>
        </div>
        <div class="me_net_neg">
          <div class="title">
            <uni-icons
              custom-prefix="meicon"
              type="me-negativeasset"
              size="30"
              color="ff6699"
            ></uni-icons>
            <span class="label">总负债</span>
            <span class="label">700000</span>
          </div>
        </div>
      </div>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import uniIcons from "@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue";
const title = ref("我的");
</script>

<style lang="scss" scoped>
@import "../../static/css/me/index.scss";
</style>
<style>
@import "../../static/css/me/icon.css";
</style>