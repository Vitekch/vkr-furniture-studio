import Vue from "vue";

export default Vue.extend({
  name: "OriginalDesignForm",
  data: () => ({
    name: "",
    address: "",
    phone: "",
    requiredRules: [(v: string) => !!v || "Пожалуйста, заполните это поле"],
    phoneRules: [
      (v: string) => /(\+\d+)|(\d+)/g.test(v) || "Некоректный номер телефона",
    ],
  }),
});
