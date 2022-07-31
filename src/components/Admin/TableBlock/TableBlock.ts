import Vue from "vue";
import ConfirmModal from "../Modals/Confirm/index.vue";

const headersOrders = [
  {
    text: "Код",
    value: "id",
  },
  {
    text: "Клиент",
    value: "client",
  },
  {
    text: "Менеджер",
    value: "manager",
  },
  {
    text: "Услуга",
    value: "service",
  },
  {
    text: "Статус",
    value: "status",
  },
  {
    text: "Действия",
    value: "actions",
    sortable: false,
  },
];

const headersClients = [
  {
    text: "Код",
    value: "id",
  },
  {
    text: "Имя",
    value: "name",
  },
  {
    text: "Номер телефона",
    value: "phone",
  },
  {
    text: "Электронная почта",
    value: "email",
  },
  {
    text: "Адрес",
    value: "address",
  },
  {
    text: "Действия",
    value: "actions",
    sortable: false,
  },
];

const headersFeedbacks = [
  {
    text: "Код",
    value: "id",
  },
  {
    text: "Имя",
    value: "name",
  },
  {
    text: "Электронная почта",
    value: "email",
  },
  {
    text: "Текст обращения",
    value: "feedback",
  },
  {
    text: "Тип обращения",
    value: "type",
  },
  {
    text: "Обращение закрыто",
    value: "is_submited",
  },
  {
    text: "Действия",
    value: "actions",
    sortable: false,
  },
];

const headersOrdFurs = [
  {
    text: "Код",
    value: "id",
  },
  {
    text: "Название",
    value: "name",
  },
  {
    text: "Тип",
    value: "type",
  },
  {
    text: "Код заказа",
    value: "id_order",
  },
  {
    text: "Действия",
    value: "actions",
    sortable: false,
  },
];

const headersOrigFurs = [
  {
    text: "Код",
    value: "id",
  },
  {
    text: "Выполняет бригада",
    value: "brigade",
  },
  {
    text: "Тип",
    value: "type",
  },
  {
    text: "Код заказа",
    value: "id_order",
  },
  {
    text: "Цена",
    value: "price",
  },
  {
    text: "Действия",
    value: "actions",
    sortable: false,
  },
];

const headersCatalog = [
  {
    text: "Код",
    value: "id",
  },
  {
    text: "Тип",
    value: "type",
  },
  {
    text: "Дизайнер",
    value: "designer",
  },
  {
    text: "Название",
    value: "name",
  },
  {
    text: "Изображение",
    value: "image",
  },
  {
    text: "Цена",
    value: "price",
  },
  {
    text: "Действия",
    value: "actions",
    sortable: false,
  },
];

export default Vue.extend({
  name: "TableBlock",
  data: () => ({
    headers: headersOrders,
    deleteModal: {
      isVisible: false,
      targetId: -1,
    },
  }),
  props: ["tableType"],
  watch: {
    tableType(v) {
      switch (v) {
        case "clients":
          (this as any).headers = headersClients;
          (this as any).$store.dispatch("getClients");
          break;
        case "orders":
          (this as any).headers = headersOrders;
          (this as any).$store.dispatch("getOrders");
          break;
        case "feedbacks":
          (this as any).headers = headersFeedbacks;
          (this as any).$store.dispatch("getFeedbacks");
          break;
        case "odr-furniture":
          (this as any).headers = headersOrdFurs;
          (this as any).$store.dispatch("getOrdFurniture");
          break;
        case "orig-furniture":
          (this as any).headers = headersOrigFurs;
          (this as any).$store.dispatch("getOrigFurniture");
          break;
        case "furniture-catalog":
          (this as any).headers = headersCatalog;
          (this as any).$store.dispatch("getCatalog");
          break;
        default:
          break;
      }
    },
  },
  components: {
    ConfirmModal,
  },
  computed: {
    items() {
      return (this as any).$store.state.adminData;
    },
  },
  mounted() {
    switch ((this as any).tableType) {
      case "clients":
        (this as any).$store.dispatch("getClients");
        break;
      case "orders":
        (this as any).$store.dispatch("getOrders");
        break;
      default:
        break;
    }
  },
  methods: {
    deleteItem(id: number) {
      this.deleteModal.targetId = id;
      this.deleteModal.isVisible = true;
    },
  },
});
