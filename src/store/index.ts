import { ICatalogItem } from "./../types/catalog/interfaces";
import { IAlert, IState } from "./../types/store/interfaces";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const showAlert = (context: any, status: boolean) => {
  const alertPayload = {
    isVisible: true,
    status: status ? "Success" : "Failed",
  };
  context.commit("setAlert", alertPayload);
};

const getAdminQuery = async (endpoint: string, context: any) => {
  const result = await fetch(`${process.env.VUE_APP_API_URL}/${endpoint}`);
  if (result.ok) {
    const data = await result.json();
    context.commit("setAdminData", data);
  }
};

const postQuery = async (endpoint: string, context: any, payload: any) => {
  const result = await fetch(`${process.env.VUE_APP_API_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (result.ok) {
    const { isOk } = await result.json();
    showAlert(context, isOk);
    return isOk;
  }
  return false;
};

export default new Vuex.Store({
  state: (): IState => ({
    isMobMenuVisible: false,
    isSetOrderModalVisible: false,
    isItemDescModalVisible: false,
    isLoading: false,
    describedItem: null,
    orderModel: null,
    alert: { isVisible: false, status: "" },
    adminData: [],
  }),
  mutations: {
    setMobMenuVisible: (state, payload: boolean) => {
      state.isMobMenuVisible = payload;
    },
    setSetOrderModalVisible: (state, payload: boolean) => {
      state.isSetOrderModalVisible = payload;
    },
    setOrderModel: (state, payload: ICatalogItem) => {
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
    },
    setAdminData: (state, payload: any[]) => {
      state.adminData = payload;
    },
    deleteAdminItem: (state, payload: number) => {
      state.adminData = state.adminData.filter((item) => item.id !== payload);
    },
    setLoading: (state, payload: boolean) => {
      state.isLoading = state.isLoading = payload;
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
      await postQuery("order-furniture", context, {...payload, id: context.state.orderModel?.id || "NULL" });
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
    },
    auth: async (context, payload) => {
      const status = await postQuery("auth", context, payload);
      return status;
    },
    getOrders: async (context) => {
      getAdminQuery("orders", context);
    },
    getClients: async (context) => {
      getAdminQuery("clients", context);
    },
    getFeedbacks: async (context) => {
      getAdminQuery("admin-feedbacks", context);
    },
    getOrdFurniture: async (context) => {
      getAdminQuery("admin-ord-furniture", context);
    },
    getOrigFurniture: async (context) => {
      getAdminQuery("admin-orig-furniture", context);
    },
    getCatalog: async (context) => {
      getAdminQuery("admin-catalog", context);
    },
    deleteItem: async (context, payload: { table: string; id: number }) => {
      const result = await fetch(`${process.env.VUE_APP_API_URL}/deleteItem`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: payload.id, table: payload.table }),
      });
      if (result.ok) {
        const { isOk } = await result.json();
        context.commit("deleteAdminItem", payload.id);
        showAlert(context, isOk);
      }
    },
    getClientsCount: async () => {
      const resultCount = await fetch(`${process.env.VUE_APP_API_URL}/count-clients`);
      if (resultCount.ok) {
        const { count } = await resultCount.json();
        return count;
      }
      return 0;
    },
    getOrdersCount: async () => {
      const resultCount = await fetch(`${process.env.VUE_APP_API_URL}/count-orders`);
      if (resultCount.ok) {
        const { count } = await resultCount.json();
        return count;
      }
      return 0;
    }
  },
  modules: {},
});
