import Vue from "vue";
import LoginForm from "@/components/Admin/LoginForm/index.vue";
import TableBlock from "@/components/Admin/TableBlock/index.vue";
import Controls from "@/components/Admin/Controls/index.vue";

export default Vue.extend({
  name: "AdminView",
  data: () => ({
    isAuth: false,
    tableType: "orders",
    clientsCount: 0,
    ordersCount: 0,
  }),
  components: {
    LoginForm,
    TableBlock,
    Controls,
  },
  mounted() {
      this.$store.dispatch("getClientsCount").then((count) => { this.clientsCount = count });
      this.$store.dispatch("getOrdersCount").then((count) => { this.ordersCount = count });
  },
  methods: {
    changeType(v: string) {
      this.tableType = v;
    },
  },
});
