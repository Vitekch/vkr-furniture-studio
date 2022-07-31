import Vue from "vue";

export default Vue.extend({
    name: "AdminControls",
    data: () => ({
        selected: 1,
    }),
    methods: {
        changeHandler() {
            switch (this.selected) {
                case 0:
                    this.$emit('typeChange', "clients");
                    break;
                case 1:
                    this.$emit('typeChange', "orders");
                    break;
                case 2:
                    this.$emit('typeChange', "feedbacks");
                    break;
                case 3:
                    this.$emit('typeChange', "odr-furniture");
                    break;
                case 4:
                    this.$emit('typeChange', "orig-furniture");
                    break;
                case 5:
                    this.$emit('typeChange', "furniture-catalog");
                    break;
                default:
                    break;
            }
        }
    }
})