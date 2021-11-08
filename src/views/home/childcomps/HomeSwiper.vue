<template>
  <swiper>
    <swiperItem v-for="(item, props, index) in banners" :key="index"
      ><a :href="item.link"><img :src="item.image" alt="" /></a
    ></swiperItem>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: Array,
  },
};
</script>

<style>
</style>