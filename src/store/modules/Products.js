import Api from "../../common/Api/Api";
import { setMessage } from "../../common/Utils/Message";

const state = {
  items: [],
  loading: { getItems: false },
};

const getters = {
  items: (state) => {
    return state.items;
  },
  loading: (state) => {
    return state.loading;
  },
  success: (state) => {
    return state.success;
  },
};

const actions = {
  getProducts({ commit }, payload) {
    commit("loading", true);
    Api.get(
      `/sites/MLA/search?q=:${payload}`,
      async (functions) => {
        const response = await functions;
        commit("loading", false);
        commit("getProductsResponse", { response });
      },
      async (functions) => {
        const response = await functions;
        commit("loading", false);
        setMessage(
          "Error",
          `Ha sucedido un error en la transacción ${response}`,
          "error"
        );
      }
    );
  },
};

const mutations = {
  loading(state, payload) {
    state.loading.getItems = payload;
  },
  getProductsResponse(state, data) {
    state.items = data.response.data.results;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
