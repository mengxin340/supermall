<template>
  <div id="recommend">
    <div class="recom-item" v-for="(items, index) in recommend" :key="index">
      <a :href="items.link">
        <img :src="items.image" alt="" />
        <div>{{ items.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: Array,
  },
};
</script>
<style>
#recommend {
  display: flex;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
  font-size: 12px;
}
.recom-item {
  text-align: center;
  flex: 1;
}
.recom-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>