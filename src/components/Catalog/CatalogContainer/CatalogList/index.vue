<template>
  <v-row v-if="items.length" style="width: 100%">
    <v-col v-for="item of items" :key="item.id" cols="12" lg="2" md="3" sm="4">
      <CatalogItem :item="item" />
    </v-col>
  </v-row>
  <v-row v-else>
    <NotFound />
  </v-row>
</template>

<script src="./CatalogList.ts" lang="ts"></script>

<style src="./CatalogList.scss" lang="scss" scoped></style>
