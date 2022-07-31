import Vue from "vue";

export default Vue.extend({
    name: "ConfirmModal",
    props: {
        id: {
            type: Number,
            required: true,
        },
        isVisible: {
            type: Boolean,
            required: true,
        },
        table: {
            type: String,
            required: true,
        }
    },
    methods: {
        confirmHandler() {
            this.$store.dispatch("deleteItem", { id: this.id, table: this.table });
        },
        cancelHandler() {
            this.$emit("closeDialog")
        }

    }
})