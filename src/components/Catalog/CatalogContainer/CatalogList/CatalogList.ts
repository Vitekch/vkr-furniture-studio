import Vue from "vue";
import CatalogItem from "./CatalogItem/index.vue";

export default Vue.extend({
  name: "CatalogList",
  props: {
    items: Array,
  },
  components: {
    CatalogItem,
  },
});
