import Vue from "vue";

export default Vue.extend({
	name: "Loader",
	computed: {
		isLoading() {
			return this.$store.state.isLoading;
		}
	}
})