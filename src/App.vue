<template>
  <v-app>
    <NavMobilePanel />
    <Header />
    <v-main class="app">
      <transition name="fast-fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <OkAlert />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from "./components/Layout/Header/index.vue";
import Footer from "./components/Layout/Footer/index.vue";
import NavMobilePanel from "./components/Layout/Header/Nav/NavMobilePanel/index.vue";
import OkAlert from './components/Tooltips/OkAlert/index.vue';
export default Vue.extend({
  name: "App",
  components: {
    Header,
    NavMobilePanel,
    Footer,
    OkAlert
},
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&family=Roboto:wght@300;400;500&display=swap");

:root {
  --main-white: #fcfcfc;
  --main-dark: #212121;
}

.v-application--wrap {
  width: 100vw;
  max-width: 100vw !important;
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

.fast-fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}

.slow-fade {
  &-enter-active {
    transition: opacity 0.7s ease-out;
    transition-delay: 1s;
  }
  &-leave-active {
    transition: opacity 0.7s ease-out;
  }

  &-enter-to,
  &-leave {
    opacity: 1;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
