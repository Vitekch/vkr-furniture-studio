import Vue from "vue";
import HeadingBlock from "@/components/MainPage/HeadingBlock/index.vue";
import FeedbackBlock from "@/components/MainPage/FeedbackBlock/index.vue";
import ControlsBlock from "@/components/MainPage/ControlsBlock/index.vue";

export default Vue.extend({
  name: "Home",
  components: {
    HeadingBlock,
    FeedbackBlock,
    ControlsBlock,
  }
});