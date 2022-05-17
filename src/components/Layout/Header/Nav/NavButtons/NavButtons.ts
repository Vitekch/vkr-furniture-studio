import Vue from "vue";
import NavList from "../NavList/index.vue";

const furnitureTypes = [
  { icon: "mdi-sofa", text: "Гостиные", to: "/catalog/living-room" },
  { icon: "mdi-bed-king", text: "Спальни", to: "/catalog/bedroom" },
  { icon: "mdi-countertop", text: "Кухни", to: "/catalog/kitchen" },
];

const serviceTypes = [
  {
    icon: "mdi-pencil-ruler",
    text: "Индивидуальный дизайн-проект",
    to: "/services/original-design",
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
