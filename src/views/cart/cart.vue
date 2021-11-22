<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <template #center>
        <div>购物车({{ typeCount }})</div>
      </template>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list :cartList="$store.state.cartList"></cart-list>
    </scroll>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import CartList from "./childComps/CartList.vue";
import BottomBar from "./childComps/BottomBar.vue";
export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    Scroll,
    CartList,
    BottomBar,
  },
  computed: {
    ...mapGetters({
      typeCount: "typeCount",
    }),
  },
  methods: {},
  activated() {
    this.$refs.scroll.scroll.refresh();
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: white;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: calc(100vh - 137px);
}
</style>