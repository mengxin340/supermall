<template>
  <nav-bar class="nav-bar">
    <template #left>
      <div class="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
    </template>
    <template #center>
      <div class="center">
        <div
          v-for="(items, index) in title"
          @click="itemClick(index)"
          :class="{ active: currentIndex === index }"
        >
          {{ title[index] }}
        </div>
      </div>
    </template>
  </nav-bar>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      title: ["商品", "参数", "评价", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$emit("cancelScroll");
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.nav-bar {
  background-color: #fff;
}
.active {
  color: var(--color-high-text);
}
.left img {
  vertical-align: middle;
  text-align: center;
}
.center {
  display: flex;
  font-size: 15px;
}
.center > div {
  flex: 1;
}
</style>