import Vue from "vue";
import NavList from "../NavList/index.vue";

const items = [
  { icon: "mdi-sofa", text: "Гостиные", to: "/furniture/living-room" },
  { icon: "mdi-bed-king", text: "Спальни", to: "/furniture/bedroom" },
  { icon: "mdi-teddy-bear", text: "Детские", to: "/furniture/nursery" },
  { icon: "mdi-countertop", text: "Кухни", to: "/furniture/kitchen" },
  { icon: "mdi-wardrobe", text: "Прихожие", to: "/furniture/hallway" },
  { text: "_____________________________________", to: "", disabled: true },
  {
    icon: "mdi-pencil-ruler",
    text: "Индивидуальный дизайн-проект",
    to: "/services/original-design",
  },
  {
    icon: "mdi-briefcase-check",
    text: "Дизайн-проекты типовых квартир",
    to: "/services/design-projects",
  },
];

export default Vue.extend({
  name: "NavMobilePanel",
  data: () => ({
    items,
  }),
  components: {
    NavList,
  },
  computed: {
    isMobMenuVisible: {
      get: function () {
        return this.$store.state.isMobMenuVisible;
      },
      set: function (val) {
        this.$store.commit("setMobMenuVisible", val);
      },
    },
  },
});
