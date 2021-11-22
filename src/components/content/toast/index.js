import Toast from "./Toast.vue"
let obj = {};
obj.install = function (Vue) {
  let constructor = Vue.extend(Toast);
  let instance = new constructor();
  const el = document.createElement('div');
  instance.$mount(el);
  document.body.appendChild(instance.$el);
  Vue.prototype.$toast = instance;
}
export default obj