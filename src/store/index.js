import Vue from "vue";
import Vuex from "vuex";
import Products from "@/store/modules/Products";
import Cart from "@/store/modules/Cart";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Products,
    Cart,
  },
});
