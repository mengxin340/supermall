export default {
  addProduct(state, payload) {
    state.cartList.push(payload);
  },
  addCount(state, payload) {
    payload.count += 1;
  },
  checkChange(state, payload) {
    payload.checked = !payload.checked;
  }
}