<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.nav-bar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
  background-color: pink;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>