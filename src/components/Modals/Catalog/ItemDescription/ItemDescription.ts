import Vue from "vue";

export default Vue.extend({
  name: "ItemDescriptionModal",
  computed: {
    isVisible: {
      get: function () {
        return this.$store.state.isItemDescModalVisible;
      },
      set: function (val: boolean) {
        this.$store.commit("setItemDescModalVisible", val);
      },
    },
    item() {
      return this.$store.state.describedItem;
    },
  },
});
