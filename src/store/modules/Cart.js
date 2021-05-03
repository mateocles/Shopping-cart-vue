
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
  addProducts({ commit }, payload) {
    commit("loading", true);
    console.log(payload);
    commit("loading", false);
  },
};

const mutations = {
  loading(state, payload) {
    state.loading.getItems = payload;
  },
  addProductsResponse(state, data) {
    state.productsCart.push(data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
