<template>
  <div class="d-sm-none d-md-flex">
    <v-menu
      v-model="isFurnMenuVisible"
      offset-y
      transition="slide-y-transition"
      @click="isFurnMenuVisible = false"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn small text v-bind="attrs" v-on="on"> Мебель </v-btn>
      </template>
      <NavList :items="furnitureTypes" :width="170" />
    </v-menu>

    <v-menu
      v-model="isServMenuVisible"
      offset-y
      transition="slide-y-transition"
      @click="isServMenuVisible = false"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn text small class="ml-1" v-bind="attrs" v-on="on"> Услуги </v-btn>
      </template>
      <NavList :items="serviceTypes" :width="350" />
    </v-menu>

    <v-btn text small class="ml-1" @click="changePath('/about-us')"> О нас </v-btn>
    <v-btn text small class="ml-1" @click="changePath('/contact-us')">
      Связаться с нами
    </v-btn>
  </div>
</template>

<script src="./NavButtons.ts" lang="ts">
</script>

<style src="./NavButtons.scss" lang="scss">
</style>