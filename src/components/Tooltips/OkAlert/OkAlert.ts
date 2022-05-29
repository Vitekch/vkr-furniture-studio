import Vue from "vue";

export default Vue.extend({
    name: "OkAlert",
    computed: {
        alert() {
            return this.$store.state.alert;
        },
    },
})