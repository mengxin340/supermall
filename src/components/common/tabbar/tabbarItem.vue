<template>
  <div class="items" @click="itemClick" :style="fontcolor">
    <div class="item-icon">
      <slot name="item-icon1" v-if="isActive"></slot
      ><slot name="item-icon2" v-else></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1 ? true : false;
    },
    fontcolor() {
      return this.isActive ? { color: "red" } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path).catch(() => {});
    },
  },
};
</script>

<style>
.items {
  flex: 1;
  font-size: 14px;
  text-align: center;
}
.item-icon {
  height: 24px;
}
.item-icon img {
  display: block;
  margin: 5px auto;
  height: 100%;
}
</style>