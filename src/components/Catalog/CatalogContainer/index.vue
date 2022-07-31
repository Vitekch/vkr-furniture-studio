<template>
  <v-container>
    <v-card class="pa-5 catalog_container">
      <CatalogList :items="catalog" />
    </v-card>
    <SetOrder />
    <ItemDescription />
  </v-container>
</template>

<script src="./CatalogContainer.ts" lang="ts"></script>

<style src="./CatalogContainer.scss" lang="scss" scoped></style>
