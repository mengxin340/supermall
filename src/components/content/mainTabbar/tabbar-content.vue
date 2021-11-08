<template>
  <div>
    <tabbar>
      <tabbarItem path="/home">
        <template v-slot:item-icon1
          ><img src="~assets/img/tabbar/home_active.svg" alt=""
        /></template>
        <template v-slot:item-icon2
          ><img src="~assets/img/tabbar/home.svg" alt=""
        /></template>
        <template> 首页 </template>
      </tabbarItem>
      <tabbarItem path="/category">
        <template v-slot:item-icon1
          ><img src="~assets/img/tabbar/category_active.svg" alt=""
        /></template>
        <template v-slot:item-icon2
          ><img src="~assets/img/tabbar/category.svg" alt=""
        /></template>
        <template> 分类</template>
      </tabbarItem>
      <tabbarItem path="/cart">
        <template v-slot:item-icon1
          ><img src="~assets/img/tabbar/cart_active.svg" alt=""
        /></template>
        <template v-slot:item-icon2
          ><img src="~assets/img/tabbar/cart.svg" alt=""
        /></template>
        <template> 购物车 </template>
      </tabbarItem>
      <tabbarItem path="/profile">
        <template v-slot:item-icon1
          ><img src="~assets/img/tabbar/profile_active.svg" alt=""
        /></template>
        <template v-slot:item-icon2
          ><img src="~assets/img/tabbar/profile.svg" alt=""
        /></template>
        <template> 我的 </template>
      </tabbarItem>
    </tabbar>
  </div>
</template>
  
<script>
import tabbar from "components/common/tabbar/tabbar";
import tabbarItem from "components/common/tabbar/tabbarItem";
export default {
  components: {
    tabbar,
    tabbarItem,
  },
};
</script>

<style>
</style>