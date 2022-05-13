import Vue from "vue";

export default Vue.extend({
  name: "CatalogSidebar",
  data: () => ({
    initiallyOpen: ["public"],
    files: {
      html: "mdi-language-html5",
      js: "mdi-nodejs",
      json: "mdi-code-json",
      md: "mdi-language-markdown",
      pdf: "mdi-file-pdf",
      png: "mdi-file-image",
      txt: "mdi-file-document-outline",
      xls: "mdi-file-excel",
    },
    tree: [],
    items: [
      { 
				icon: "mdi-sofa",
				name: "Гостиные",
				to: "/catalog/living-room",
				children: [
					{
						name: "Диваны"
					},
					{
						name: "Кресла"
					},
					{
						name: "Стенки"
					},
					{
						name: "Столики жулнальные"
					},
					{
						name: "Тумбы под телевизор"
					}
				]
			},
      {
				icon: "mdi-bed-king",
				name: "Спальни",
				to: "/catalog/bedroom",
				children: [
					{
						name: "Кровати"
					},
					{
						name: "Тумбы прикроватные"
					},
					{
						name: "Гардеробы"
					},
				]
			},
      { icon: "mdi-teddy-bear", name: "Детские", to: "/catalog/nursery" },
      { icon: "mdi-countertop", name: "Кухни", to: "/catalog/kitchen" },
      { icon: "mdi-wardrobe", name: "Прихожие", to: "/catalog/hallway" },
    ],
  }),
});
