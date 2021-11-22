<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tab-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 49px;
  width: 100%;
  background-color: #f6f6f6;
  box-shadow: 0px -1px rgba(0, 0, 0, 0.08);
}
</style>