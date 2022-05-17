import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#d6e99f",
        secondary: "#b0bec5",
        accent: "#8c9eff",
        error: "#b71c1c",
        complementary: "#b29fe9",
        analogous_1: "#e9d69f",
        analogous_2: "#b2e99f",
      },
    },
  },
});
