<template>
  <div id="home">
    <navbar class="home-nav">
      <template #center> 购物街 </template>
    </navbar>
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scrollContent="scroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <swiper :banners="banners"></swiper>
      <recommend :recommend="recommend"></recommend>
      <featureView></featureView>
      <tabControl
        :title="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
      ></tabControl>
      <goods-list :goodsList="goodsType"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import swiper from "./childcomps/HomeSwiper.vue";
import recommend from "./childcomps/RecommendView.vue";
import featureView from "./childcomps/FeatureView.vue";

import navbar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import tabControl from "../../components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goodsList/GoodsList.vue";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultdata, getHomeGoods } from "network/home.js";

export default {
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currentType: "pop",
      isShow: false,
    };
  },
  computed: {
    goodsType() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    this.getHomeMultdata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    //事件处理函数
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    scroll(position) {
      this.isShow = -position.y > 1000 ? true : false;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },

    //请求对应方法
    getHomeMultdata() {
      getHomeMultdata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.scroll.refresh();
        this.$refs.scroll.scroll.finishPullUp();
      });
    },
  },
  components: {
    navbar,
    swiper,
    recommend,
    featureView,
    tabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.tab-control {
  position: sticky;
  top: 44px;
}
.content {
  position: absolute;
  top: 44px;
  height: calc(100% - 93px);
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>