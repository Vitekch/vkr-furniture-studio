<template>
  <v-app>
    <NavMobilePanel />
    <Header />
    <v-main class="app">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from "./components/Layout/Header/index.vue";
import NavMobilePanel from "./components/Layout/Header/Nav/NavMobilePanel/index.vue";
export default Vue.extend({
  name: "App",
  components: {
    Header,
    NavMobilePanel,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&family=Roboto:wght@300;400;500&display=swap");

:root {
  --main-white: #fcfcfc;
  --main-dark: #212121;
}

.app {
  background-color: rgb(250, 250, 250);
}

@media (min-width: 1264px) {
  .v-container {
    max-width: 1390px;
  }
  .v-container--fluid {
    max-width: 100%;
  }
}

.underline {
  background-color: #00695c;
  height: 1px;
  width: 0px;
  transition: 0.2s;
}

*:hover > .underline {
  width: 100%;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
