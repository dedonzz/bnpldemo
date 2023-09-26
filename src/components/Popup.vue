<template>
  <div class="popup">
    <div class="popup-inner">
      <slot />
      <div
        :style="{
          display: active ? 'none' : 'block',
        }"
      >
        <div>您好，請確認付款：</div>
        <div>消費金額：</div>
        <div>NT$ 13,857</div>
        <div>消費後餘額：</div>
        <div>NT$ 20,000 - NT$ 13,857 = NT$ 6,143</div>
        <button class="popup-close" @click="TogglePopup()">確認</button>
        <button class="popup-close" @click="TogglePopup()">取消</button>
      </div>
      <div
        :style="{
          display: active ? 'block' : 'none',
        }"
      >
        <div>您好，請輸入手機驗證號碼6碼：</div>
        <input type="text" />
        <button @click="handleClick">確認</button>
        <button @click="handleClick">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
    };
  },
  methods: {
    handleClick() {
      this.active = !this.active;
    },
  },
  props: ["TogglePopup"],
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgb(255, 255, 255);

  display: flex;
  align-items: center;
  justify-content: center;

  .popup-inner {
    background: #fff;
    padding: 32px;
    button {
      margin-top: 10px;
      width: 100%;
      background-color: #00635e;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }
    button:hover {
      background-color: #00635e60;
    }
  }
}
</style>
