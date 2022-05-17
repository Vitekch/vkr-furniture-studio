import Vue from "vue";
import DesignProjectCard from "./DesignProjectCard/index.vue";

const cardsData = [
  {
    id: 1,
    description:
      "Дизайн-проек тs dddddddd sss ddsgdsss sdf saas блаблаблабла бла",
  },
  {
    id: 2,
    description: "Дизайн-проект 2 блаблаблабла бла",
  },
  {
    id: 3,
    description: "Дизайн-проект 3 блаблаблабла бла",
  },
  {
    id: 4,
    description: "Дизайн-проект 5 блаблаблабла бла",
  },
  {
    id: 5,
    description: "Дизайн-проект 4 блаблаблабла бла",
  },
  {
    id: 6,
    description: "Дизайн-проект 6 блаблаблабла бла",
  },
  {
    id: 7,
    description: "Дизайн-проект 7 блаблаблабла бла",
  },
];

export default Vue.extend({
  name: "DesignProjectsContainer",
  data: () => ({
    cardsData,
  }),
  components: {
    DesignProjectCard,
  },
});
