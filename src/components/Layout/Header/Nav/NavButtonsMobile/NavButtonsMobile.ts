import Vue from "vue";

export default Vue.extend({
  name: "NavButtonsMobile",
  methods: {
    switchMenuState(state: boolean) {
      this.$store.commit("setMobMenuVisible", state);
    },
  },
});
