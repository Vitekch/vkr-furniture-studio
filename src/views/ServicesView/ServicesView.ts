import Vue from "vue";
import Heading from "@/components/Services/Heading/index.vue";
import OriginalDesignForm from "@/components/Services/OriginalDesignForm/index.vue";

export default Vue.extend({
  name: "ServicesView",
  props: {
    service: String,
  },
  components: {
    Heading,
    OriginalDesignForm,
  },
  computed: {
    body() {
      switch (this.service) {
        case "original-design": {
          return "OriginalDesignForm";
        }
        default: {
          return "";
        }
      }
    },
  },
});
