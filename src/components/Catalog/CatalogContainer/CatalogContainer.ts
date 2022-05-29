import Vue from "vue";
import CatalogList from "./CatalogList/index.vue";
import SetOrder from "@/components/Modals/Catalog/SetOrder/index.vue";
import ItemDescription from "@/components/Modals/Catalog/ItemDescription/index.vue";

// const items = [
//   {
//     category: "chairs",
//     items: [
//       {
//         id: 1,
//         name: "Стул",
//         description: "aaaaaaaaaaa",
//         img: "https://imodern.ru/upload/iblock/d96/d962dd18dbc57458c16e4fac2933f2bf.jpg",
//       },
//       {
//         id: 2,
//         name: "Стул1",
//         description: "aaaaaaaaaasa",
//         img: "https://imodern.ru/upload/iblock/d96/d962dd18dbc57458c16e4fac2933f2bf.jpg",
//       },
//       {
//         id: 3,
//         name: "Стул2",
//         description: "aaaaaaadaaaa",
//         img: "https://imodern.ru/upload/iblock/d96/d962dd18dbc57458c16e4fac2933f2bf.jpg",
//       },
//       {
//         id: 4,
//         name: "Стул3",
//         description: "aaaaaafaaaaa",
//         img: "https://imodern.ru/upload/iblock/d96/d962dd18dbc57458c16e4fac2933f2bf.jpg",
//       },
//       {
//         id: 5,
//         name: "Стул4",
//         description: "aaaaaaaaaaa",
//         img: "https://imodern.ru/upload/iblock/d96/d962dd18dbc57458c16e4fac2933f2bf.jpg",
//       },
//       {
//         id: 6,
//         name: "Стул5",
//         description: "aaaaeaaaaaaa",
//         img: "https://imodern.ru/upload/iblock/d96/d962dd18dbc57458c16e4fac2933f2bf.jpg",
//       },
//       {
//         id: 7,
//         name: "Стул6",
//         description: "aqaaaaaaaaaa",
//         img: "https://imodern.ru/upload/iblock/d96/d962dd18dbc57458c16e4fac2933f2bf.jpg",
//       },
//     ],
//   },
// ];

export default Vue.extend({
  name: "CatalogContainer",
  data: () => ({
    items: [],
  }),
  props: {
    category: String,
  },
  components: {
    CatalogList,
    SetOrder,
    ItemDescription,
  },
  async mounted() {
    (this as any).$store.dispatch("getCatalogFurniture")
      .then((data: any) => {console.log(data); (this as any).items = data})
      .catch((err: any) => { console.log(err) });
  },
  computed: {
    catalog() {
      const idx = (this as any).items.findIndex((item: any) => item.category === this.category);
      return idx + 1 ? (this as any).items[idx].items : [];
    },
  },
});
