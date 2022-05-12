import Vue from "vue";
import NavList from "../NavList/index.vue";

const furnitureTypes = [
  { icon: "mdi-sofa", text: "Гостиные", to: "/furniture/living-room" },
  { icon: "mdi-bed-king", text: "Спальни", to: "/furniture/bedroom" },
  { icon: "mdi-teddy-bear", text: "Детские", to: "/furniture/nursery" },
  { icon: "mdi-countertop", text: "Кухни", to: "/furniture/kitchen" },
  { icon: "mdi-wardrobe", text: "Прихожие", to: "/furniture/hallway" },
];

const serviceTypes = [
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
  name: "NavButtons",
  data: () => ({
    isFurnMenuVisible: false,
    isServMenuVisible: false,
    furnitureTypes,
    serviceTypes,
  }),
  components: {
    NavList,
  },
  methods: {
    switchMenuState(menuState: boolean) {
      menuState = menuState ? false : true;
    },
    changePath(path: string) {
      this.$router.push(path);
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
});
