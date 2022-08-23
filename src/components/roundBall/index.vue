<template>
  <view class="round_content">
    <view class="round_ball">
      <view
        class="round_expenditure"
        :style="{ bottom: styleObject.bottomHight + 'rpx' }"
      ></view>
      <view class="round_residue">
        <div>剩余</div>
        <div class="money">{{money}}</div>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "RoundBall",
  data() {
    return {
      styleObject: {
        bottomHight: 180,
      },
      money:6239.46
    };
  },
});
</script>

<style>
.round_content {
  display: flex;
  height: 420rpx;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.round_ball {
  width: 320rpx;
  height: 320rpx;
  border: 1px solid rgba(60, 120, 216, 0.7);
  border-radius: 160rpx;
  box-shadow: 0 0 30rpx rgba(60, 120, 216, 0.5);
  background-color: #3c78d8;
  position: relative;
  overflow: hidden;
}
.round_expenditure {
  width: 420rpx;
  height: 420rpx;
  background-color: #fff;
  border-radius: 38%;
  position: absolute;
  left: -50rpx;
  animation: rotate 3s linear infinite;
}
.round_residue {
  width: 100%;
  height: 100rpx;
  line-height: 50rpx;
  text-align: center;
  position: absolute;
  top: 50%;
  margin-top: -50rpx;
}
.money {
  font-size: 40rpx;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
