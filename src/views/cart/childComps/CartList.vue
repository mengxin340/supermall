<template>
  <div id="cary-list">
    <cart-list-item
      v-for="(item, index) in cartList"
      :itemInfo="cartList[index]"
      :key="index"
    ></cart-list-item>
  </div>
</template>

<script>
import CartListItem from "./CartListItem.vue";
export default {
  props: {
    cartList: {
      type: Array,
      default: [],
    },
  },
  components: {
    CartListItem,
  },
};
</script>

<style>
</style>