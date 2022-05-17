import { ICatalogItem } from "./../types/catalog/interfaces";
import { IState } from "./../types/store/interfaces";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: (): IState => ({
    isMobMenuVisible: false,
    isSetOrderModalVisible: false,
    isItemDescModalVisible: false,
    describedItem: null,
    orderModel: "",
  }),
  mutations: {
    setMobMenuVisible: (state, payload: boolean) => {
      state.isMobMenuVisible = payload;
    },
    setSetOrderModalVisible: (state, payload: boolean) => {
      state.isSetOrderModalVisible = payload;
    },
    setOrderModel: (state, payload: string) => {
      state.orderModel = payload;
    },
    setItemDescModalVisible: (state, payload: boolean) => {
      state.isItemDescModalVisible = payload;
    },
    setDescribedItem: (state, payload: ICatalogItem) => {
      state.describedItem = payload;
    },
  },
  actions: {},
  modules: {},
});
