<template>
  <v-navigation-drawer
    v-model="isMobMenuVisible"
    app
    temporary
    style="z-index: 10000"
  >
    <NavList :items="items" />
  </v-navigation-drawer>
</template>

<script src="./NavMobilePanel.ts" lang="ts"></script>

<style src="./NavMobilePanel.scss" lang="scss" scoped></style>
