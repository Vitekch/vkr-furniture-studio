<template>
  <v-row v-if="items.length">
    <v-col v-for="item of items" :key="item.id" cols="12" lg="2" md="3" sm="4">
      <CatalogItem :item="item" />
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col class="d-flex justify-center">
      <h3 class="text-h3">Загляните сюда позже...</h3>
    </v-col>
  </v-row>
</template>

<script src="./CatalogList.ts" lang="ts"></script>

<style src="./CatalogList.scss" lang="scss" scoped></style>
