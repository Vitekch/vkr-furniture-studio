import Vue from "vue";

export default Vue.extend({
  name: "NavList",
  props: ["items", "width"],
  methods: {
    scrollTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
});
