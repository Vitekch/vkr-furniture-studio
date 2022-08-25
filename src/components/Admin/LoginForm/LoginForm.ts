import Vue from "vue";

export default Vue.extend({
  name: "LoginForm",
  data: () => ({
    requiredRule: [(v: string) => !!v || "Пожалуйста, заполните это поле"],
    login: "",
    password: "",
  }),
  methods: {
    auth() {
      const form = this.$refs.loginForm as any;
      if (form.validate()) {
        this.$store.commit("setLoading", true);
        this.$store
          .dispatch("auth", {
            login: this.login,
            password: this.password,
          })
          .then((status) => {
            if (status) {
              this.$emit("successLogin");
            }
          })
          .finally(() => {
            setTimeout(() => {
              this.$store.commit("setLoading", false);
            }, 2000)
          });
      }
    },
  },
});
