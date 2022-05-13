import Vue from "vue";
import Heading from "@/components/Services/Heading/index.vue";
import OriginalDesignForm from "@/components/Services/OriginalDesignForm/index.vue";
import DesignProjectsContainer from "@/components/Services/DesignProjectsContainer/index.vue";

export default Vue.extend({
  name: "ServicesView",
  props: {
    service: String,
  },
  components: {
    Heading,
    OriginalDesignForm,
		DesignProjectsContainer,
  },
  computed: {
    body() {
      switch (this.service) {
        case "original-design": {
          return "OriginalDesignForm";
        }
        case "design-projects": {
          return "DesignProjectsContainer";
        }
        default: {
          return "";
        }
      }
    },
  },
});
