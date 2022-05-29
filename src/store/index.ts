import { ICatalogItem } from "./../types/catalog/interfaces";
import { IAlert, IState } from "./../types/store/interfaces";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const postQuery = async (endpoint: string, context: any, payload: any) => {
  const result = await fetch(
    `${process.env.VUE_APP_API_URL}/${endpoint}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
    }
  )
  if (result.ok) {
    const { isOk } = await result.json();
    const alertPayload = { isVisible: true, status: isOk ? "Success" : "Failed" };
    context.commit("setAlert", alertPayload);
  }
}

export default new Vuex.Store({
  state: (): IState => ({
    isMobMenuVisible: false,
    isSetOrderModalVisible: false,
    isItemDescModalVisible: false,
    describedItem: null,
    orderModel: "",
    alert: { isVisible: false, status: "" },
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
    setAlert: (state, payload: IAlert) => {
      state.alert = payload;
    }
  },
  actions: {
    getCatalogFurniture: async () => {
      const result = await fetch(`${process.env.VUE_APP_API_URL}/furniture`);
      if (result.ok) {
        const data = await result.json();
        return data;
      }
      return [];
    },
    setCatalogOrder: async (context, payload) => {
      await postQuery("order-furniture", context, payload);
    },
    getFeedback: async () => {
      const result = await fetch(`${process.env.VUE_APP_API_URL}/feedbacks`);
      if (result.ok) {
        const data = await result.json();
        return data;
      }
      return [];
    },
    sendFeedback: async (context, payload) => {
      await postQuery("send-feedback", context, payload);
    },
    setDesignOrder: async (context, payload) => {
      await postQuery("order-design", context, payload);
    }
  },
  modules: {},
});
