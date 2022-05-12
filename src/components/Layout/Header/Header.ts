import Vue from "vue";
import NavButtons from "./Nav/NavButtons/index.vue";
import NavButtonMobile from "./Nav/NavButtonsMobile/index.vue";

export default Vue.extend({
  name: "Header",
  components: {
    NavButtons,
    NavButtonMobile,
  },
  methods: {
    scrollTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
});
