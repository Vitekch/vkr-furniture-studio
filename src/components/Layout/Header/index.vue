<template>
  <v-app-bar app dense>
    <v-container class="d-flex align-center">
      <div @click="scrollTop">
        <router-link to="/" class="logo">
          Little Furniture Studio
          <div class="underline"></div>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <NavButtons />
      <NavButtonMobile />
    </v-container>
  </v-app-bar>
</template>

<script src="./Header.ts" lang="ts"></script>

<style src="./Header.scss" lang="scss" scoped></style>
