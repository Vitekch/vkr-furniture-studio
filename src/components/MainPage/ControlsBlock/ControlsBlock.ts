import Vue from "vue";

export default Vue.extend({
  name: "ControlsBlock",
  methods: {
    changePath(path: string) {
      this.$router.push(path);
    },
  },
});
