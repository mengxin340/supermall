<template>
  <div class="toast" v-show="show">
    <img src="" alt="" />
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: "",
    };
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  z-index: 20;
  height: 80px;
  width: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  line-height: 80px;
  border-radius: 4px;
}
</style>