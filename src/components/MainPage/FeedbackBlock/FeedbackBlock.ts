import Vue from "vue";
import FeedbackItem from "./FeedbackItem/index.vue";

const feedbacksData = [
  {
    username: "Steve Huis",
    feedback:
      "Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек в Фидбек",
  },
  {
    username: "Steve Huis1",
    feedback:
      "Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек в Фидбек",
  },
  {
    username: "Steve Huis2",
    feedback:
      "Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек в Фидбек",
  },
  {
    username: "Steve Huis3",
    feedback:
      "Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек в Фидбек",
  },
  {
    username: "Steve Huis5",
    feedback:
      "Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек в Фидбек",
  },
  {
    username: "Steve Huis6",
    feedback:
      "Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек Фидбек в Фидбек",
  },
];

export default Vue.extend({
  name: "FeedbackBlock",
  components: {
    FeedbackItem,
  },
  data: () => ({
    page: 0,
    timer: 0,
  }),
  mounted() {
    this.timer = setInterval(() => {
      const nextIdx = this.page * 3 + 3;
      this.page = feedbacksData[nextIdx] ? this.page + 1 : 0;
    }, 10000);
  },
	deactivated() {
    clearInterval(this.timer);
  },
  computed: {
    feedbacks() {
      const pagedFeedbacks = [];
      for (let i = this.page * 3; i < this.page * 3 + 3; i++) {
        if (feedbacksData[i]) {
          pagedFeedbacks.push(feedbacksData[i]);
        } else {
          break;
        }
      }
      return pagedFeedbacks;
    },
  },
});
