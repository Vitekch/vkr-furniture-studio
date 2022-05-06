import Vue from "vue";

export default Vue.extend({
  name: "FeedbackItem",
  props: {
    username: {
      type: String,
    },
    feedback: {
      type: String,
    },
  },
});
