import Vue from "vue";
import CatalogItem from "./CatalogItem/index.vue";
import NotFound from "./NotFound/index.vue";

export default Vue.extend({
  name: "CatalogList",
  props: {
    items: Array,
  },
  components: {
    CatalogItem,
    NotFound,
  },
});
