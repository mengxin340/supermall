<template>
  <div id="app">
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from "components/content/mainTabbar/tabbar-content";
export default {
  components: { tabbar },
};
</script>
<style>
@import "./assets/css/base.css";
</style>
