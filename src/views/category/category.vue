<template>
  <div class="wrapper">
    <div class="content" @click="click"></div>
    <scroll ref="a">123</scroll>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Scroll from "components/common/scroll/Scroll";

export default {
  mounted() {
    console.log(Scroll);
    console.log(this.$refs);
  },
  methods: {
    click() {
      console.log("点击了");
    },
  },
  components: {
    Scroll,
  },
};
</script>

<style >
.wrapper {
  height: 200px;
  background-color: yellow;
  overflow: hidden;
}
</style>