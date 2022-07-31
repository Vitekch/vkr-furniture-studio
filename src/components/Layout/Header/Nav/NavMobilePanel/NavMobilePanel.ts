import Vue from "vue";
import NavList from "../NavList/index.vue";

const items = [
  { icon: "mdi-sofa", text: "Гостиные", to: "/catalog/living-room" },
  { icon: "mdi-bed-king", text: "Спальни", to: "/catalog/bedroom" },
  { icon: "mdi-countertop", text: "Кухни", to: "/catalog/kitchen" },
  { text: "_____________________________________", to: "", disabled: true },
  {
    icon: "mdi-pencil-ruler",
    text: "Индивидуальный дизайн-проект",
    to: "/services/original-design",
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
