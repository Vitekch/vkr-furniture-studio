import Vue from "vue";

export default Vue.extend({
  name: "CatalogItem",
  props: {
    item: Object,
  },
  methods: {
    setOrderModel() {
      this.$store.commit("setOrderModel", this.item.name);
      this.$store.commit("setSetOrderModalVisible", true);
    },
    setDescribedItem() {
      this.$store.commit("setDescribedItem", this.item);
      this.$store.commit("setItemDescModalVisible", true);
    },
  },
});
