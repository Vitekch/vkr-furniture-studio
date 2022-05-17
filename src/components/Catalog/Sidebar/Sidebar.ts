import Vue from "vue";

export default Vue.extend({
  name: "CatalogSidebar",
  data: () => ({
    tree: [],
    items: [
      {
        icon: "mdi-sofa",
        name: "Гостиные",
        to: "/catalog/living-room",
        children: [
          {
            name: "Диваны",
            value: "sofas",
          },
          {
            name: "Кресла",
            value: "armchairs",
          },
          {
            name: "Столики жулнальные",
            value: "coffee-tables",
          },
          {
            name: "Тумбы под телевизор",
            value: "tv-cabinets",
          },
        ],
      },
      {
        icon: "mdi-bed-king",
        name: "Спальни",
        to: "/catalog/bedroom",
        children: [
          {
            name: "Кровати",
            value: "beds",
          },
          {
            name: "Тумбы прикроватные",
            value: "cabinets",
          },
          {
            name: "Гардеробы",
            value: "wardrobes",
          },
        ],
      },
      {
        icon: "mdi-countertop",
        name: "Кухни",
        children: [
          {
            name: "Столы",
            value: "tables",
          },
          {
            name: "Стулья",
            value: "chairs",
          },
        ],
      },
    ],
  }),
  methods: {
    changePath(path: string[]) {
      if (path.length) {
        this.$router.push(path[0]);
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }
    },
  },
});
