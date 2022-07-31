import Vue from "vue";

export default Vue.extend({
  name: "SetOrderModal",
  data: () => ({
    name: "",
    phone: "",
    email: "",
    requiredRules: [(v: string) => !!v || "Пожалуйста, заполните это поле"],
    phoneRules: [
      (v: string) => /(\+\d+)|(\d+)/g.test(v) || "Некоректный номер телефона",
    ],
    emailRules: [
      (v: string) => /(\w)+@(\w)+\.(\w)/g.test(v) || "Некоректный E-mail",
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
      return this.$store.state.orderModel.name;
    },
  },
  methods: {
    submitHandler() {
      const form = this.$refs.contactForm as any;
      if (form.validate()) {
          this.$store.dispatch("setCatalogOrder", {
            name: this.name,
            email: this.email,
            phone: this.phone,
          });
      }
      
    }
  }
});
