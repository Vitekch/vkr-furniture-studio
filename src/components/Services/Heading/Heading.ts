import Vue from "vue";

export default Vue.extend({
  name: "ServicesHeading",
  props: {
    service: String,
  },
  computed: {
    title() {
      switch (this.service) {
        case "original-design": {
          return "Заказать индивидуальный дизайн-проект";
        }
        case "design-projects": {
          return "Готовые дизайн-проекты";
        }
        default: {
          return "";
        }
      }
    },
  },
});
