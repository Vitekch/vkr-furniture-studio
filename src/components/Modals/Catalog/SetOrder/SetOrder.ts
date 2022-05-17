import Vue from "vue";

export default Vue.extend({
  name: "SetOrderModal",
  data: () => ({
    name: "",
    phone: "",
    requiredRules: [(v: string) => !!v || "Пожалуйста, заполните это поле"],
    phoneRules: [
      (v: string) => /(\+\d+)|(\d+)/g.test(v) || "Некоректный номер телефона",
    ],
  }),
  computed: {
    isVisible: {
      get: function () {
        return this.$store.state.isSetOrderModalVisible;
      },
      set: function (val: boolean) {
        this.$store.commit("setSetOrderModalVisible", val);
      },
    },
    model() {
      return this.$store.state.orderModel;
    },
  },
});
