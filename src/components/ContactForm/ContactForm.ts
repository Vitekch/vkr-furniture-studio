import Vue from "vue";

export default Vue.extend({
  name: "ContactForm",
  data: () => ({
    action: "question",
    name: "",
    email: "",
    message: "",
    requiredRules: [(v: string) => !!v || "Пожалуйста, заполните это поле"],
    emailRules: [
      (v: string) => /(\w)+@(\w)+\.(\w)/g.test(v) || "Некоректный E-mail",
    ],
  }),
  methods: {
    changeAction(action: string) {
      this.action = action;
    },
    submitHandler() {
      const form = this.$refs.contactForm as any;
      if (form.validate()) {
        console.log("its Ok");
      }
    },
  },
});
