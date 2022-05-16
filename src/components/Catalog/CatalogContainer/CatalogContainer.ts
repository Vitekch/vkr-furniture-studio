import Vue from "vue";
import CatalogList from "./CatalogList/index.vue";

const items = [
  {
    category: "chairs",
    items: [
      {
        id: 1,
        name: "Стул"
      },
      {
        id: 2,
        name: "Стул1"
      },
      {
        id: 3,
        name: "Стул2"
      },
      {
        id: 4,
        name: "Стул3"
      },
      {
        id: 5,
        name: "Стул4"
      },
      {
        id: 6,
        name: "Стул5"
      },
      {
        id: 7,
        name: "Стул6"
      },
    ]
  }
]

export default Vue.extend({
  name: "CatalogContainer",
  data: () => ({
    items,
  }),
  props: {
    category: String,
  },
  components: {
    CatalogList,
  },
  computed: {
    catalog() {
      const idx = items.findIndex((item) => item.category === this.category);
      return idx + 1 ? items[idx].items : [];
    },
  }
});
