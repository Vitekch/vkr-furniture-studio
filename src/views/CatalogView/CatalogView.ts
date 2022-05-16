import Vue from "vue";
import Sidebar from "@/components/Catalog/Sidebar/index.vue";
import CatalogContainer from "@/components/Catalog/CatalogContainer/index.vue";

export default Vue.extend({
  name: "CatalogView",
  props: {
    category: String,
  },
  components: {
    Sidebar,
    CatalogContainer,
  },
});
