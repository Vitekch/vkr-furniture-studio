import Vue from "vue";

export default Vue.extend({
  name: "OriginalDesignForm",
  data: () => ({
    name: "",
    address: "",
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
  methods: {
    submitHandler() {
      const form = this.$refs.contactForm as any;
      if (form.validate()) {
          this.$store.dispatch("setDesignOrder", {
            name: this.name,
            email: this.email,
            phone: this.phone,
            address: this.address,
          });
      }
      
    }
  }
});
