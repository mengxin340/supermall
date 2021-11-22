<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tabbar></tabbar>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>
<script>
import Icon from "components/content/Icon/Icon.vue";
import SvgIcon from "components/content/Icon/svg.vue";
import tabbar from "components/content/mainTabbar/tabbar-content";
export default {
  components: {
    tabbar,
    Icon,
    SvgIcon,
  },
};
</script>
<style>
@import "./assets/css/base.css";
</style>
