<template>
  <div class="goods-list">
    <goods-list-item
      v-for="(item, index) in goodsList"
      :key="index"
      :goodsItem="goodsList[index]"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { GoodsListItem },
};
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>