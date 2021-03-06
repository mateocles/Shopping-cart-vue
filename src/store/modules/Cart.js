const state = {
  productsCart: [],
  loading: { getItems: false },
};

const getters = {
  productsCart: (state) => {
    return state.productsCart;
  },
  loading: (state) => {
    return state.loading;
  },
  success: (state) => {
    return state.success;
  },
};

const actions = {
  addProduct({ commit }, payload) {
    commit("addProductResponse", payload);
  },
  deletProduct({ commit }, payload) {
    commit("deletProductResponse", payload);
  },
  reloadApp({commit},payload){
    commit("reloadApp",payload)
  }
};

const mutations = {
  loading(state, payload) {
    state.loading.getItems = payload;
  },
  reloadApp(state, payload) {
    state.productsCart = payload;
  },
  addProductResponse(state, data) {
    state.productsCart.push(data);
    localStorage.setItem("cart", JSON.stringify(state.productsCart));
  },
  deletProductResponse(state, data) {
    var i = state.productsCart.indexOf(data);
    state.productsCart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(state.productsCart));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
