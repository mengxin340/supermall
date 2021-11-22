<template>
  <div class="bottom-menu">
    <CheckButton
      class="select-all"
      :checked="isSelectAll"
      @click.native="checkClick"
    ></CheckButton>
    <span>全选</span>
    <span class="total-price">合计:{{ totalPrice }}</span>
    <span class="buy-product">结算({{ totalCount }})</span>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

export default {
  name: "BottomBar",
  components: {
    CheckButton,
  },
  computed: {
    //购物车商品总数量
    totalCount() {
      return this.$store.state.cartList
        .filter((item) => item.checked == true)
        .reduce(function (preVal, currentVal) {
          return preVal + currentVal.count;
        }, 0);
    },
    //购物车商品总价格
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => item.checked == true)
          .reduce(function (preVal, currentVal) {
            return preVal + parseFloat(currentVal.price) * currentVal.count;
          }, 0)
      );
    },
    //全选按钮反选
    isSelectAll() {
      if (this.$store.state.cartList.length == 0) {
        return false;
      }
      for (let item of this.$store.state.cartList) {
        if (item.checked == false) {
          return false;
        }
      }
      return true;
    },
  },
  methods: {
    //全选按钮选择
    checkClick() {
      let state = this.isSelectAll;
      this.$store.state.cartList
        .filter((item) => {
          return item.checked == state;
        })
        .forEach((item) => {
          this.$store.commit("checkChange", item);
        });
    },
  },
};
</script>

<style scoped>
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -1px rgba(0, 0, 0, 0.08);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}

.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}

.bottom-menu .total-price {
  position: absolute;
  right: 120px;
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}

.bottom-menu .buy-product {
  background-color: #ff5777;
  border-radius: 17px;
  color: #fff;
  width: 100px;
  height: 34px;
  margin: 5px 0;
  text-align: center;
  line-height: 34px;
  float: right;
}
</style>
