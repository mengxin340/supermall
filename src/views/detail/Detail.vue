<template>
  <div id="detail" class="detail">
    <detail-nav-bar
      @cancelScroll="cancelScroll"
      @titleClick="titleClick"
      ref="detailNavBar"
    ></detail-nav-bar>
    <scroll :probeType="3" class="content" ref="scroll"
      ><detail-swiper :images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info
        ref="comment"
        :comment-info="commentInfo"
      ></detail-comment-info>
      <goods-list :goodsList="goodsList" id="recommend-info"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import {
  getDetailData,
  Goods,
  Shop,
  GoodsParam,
  getRecomData,
} from "network/detail.js";

import Scroll from "components/common/scroll/Scroll.vue";

import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import GoodsList from "components/content/goodsList/GoodsList.vue";
import BackTop from "components/content/backTop/BackTop";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    BackTop,
    GoodsList,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      goodsList: [],
      currentTitle: "#swiper",
      currentIndex: 0,
      isShow: false,
      timer: null,
    };
  },
  methods: {
    //详情页顶部导航栏点击跳转到页面相应位置
    titleClick(index) {
      switch (index) {
        case 0:
          this.currentTitle = "#swiper";
          break;
        case 1:
          this.currentTitle = "#param-info";
          break;
        case 2:
          this.currentTitle = "#comment-info";
          break;
        case 3:
          this.currentTitle = "#recommend-info";
          break;
      }
      this.$refs.scroll.scroll.scrollToElement(this.currentTitle);
    },
    listenTitleScroll() {
      //主题和滚动同步变化
      let flag = true;
      let top = [];
      this.$refs.scroll.scroll.on("scroll", (position) => {
        // if (flag) {
        //   let title = [
        //     "swiper",
        //     "param-info",
        //     "#comment-info",
        //     "#recommend-info",
        //   ];
        //   for (let val of title) {
        //     top.push(document.querySelector(val).offsetTop);
        //   }
        //   top.push(Infinity);
        //   flag = false;
        // }
        // if (this.currentIndex != index) {
        //   for (let index in top) {
        //     if (position.y >= top[index] && position.y < top[index + 1]) {
        //       this.currentIndex = index;
        //       this.$refs.detailNavBar.currentIndex = this.currentIndex;
        //     }
        //   }
        // }
        //解决快速滚动返回报错
        // if (!document.querySelector(`.detail${this.iid}`)) {
        //   return;
        // }
        //滚动同步
        if (-position.y >= document.querySelector("#swiper").offsetTop) {
          this.currentIndex = 0;
        }
        if (-position.y >= document.querySelector("#param-info").offsetTop) {
          this.currentIndex = 1;
        }
        if (-position.y >= document.querySelector("#comment-info").offsetTop) {
          this.currentIndex = 2;
        }
        if (
          -position.y >= document.querySelector("#recommend-info").offsetTop
        ) {
          this.currentIndex = 3;
        }
        this.$refs.detailNavBar.currentIndex = this.currentIndex;
        this.isShow = -position.y > 1000 ? true : false;
      });
    },
    backClick() {
      //点击返回顶部事件
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    cancelScroll() {
      //返回取消滚动
      this.$refs.scroll.scroll.off("scroll");
    },
    addToCart() {
      const product = {};
      product.img = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.nowPrice;
      product.iid = this.iid;
      product.checked = true;
      this.$store.dispatch("addCart", product).then((message) => {
        this.showToast(message);
      });
    },
    showToast: function (message) {
      //实现toast间隔时间隐藏和显示
      this.$toast.message = message;
      this.$toast.show = true;
      setTimeout(() => {
        this.$toast.message = "";
        this.$toast.show = false;
      }, 500);
    },
  },
  created() {
    //根据iid请求详情页相关数据
    this.iid = this.$route.params.iid;
    getDetailData(this.iid).then((res) => {
      const data = res.data.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      if (data.rate.list != null) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecomData().then((res) => {
      this.goodsList = res.data.data.list;
    });
  },
  mounted() {
    this.backClick();
    this.listenTitleScroll();
  },
};
</script>

<style scoped>
#detail {
  position: absolute;
  top: 44px;
  left: 0;
  z-index: 11;
  height: calc(100vh - 102px);
  background-color: #fff;
}
.content {
  height: 100%;
}
</style>