<template>
  <v-row>
    <v-col v-for="item of items" :key="item.id" cols="12" md="3" sm="4">
      <CatalogItem :item="item" />
    </v-col>
  </v-row>
</template>

<script src="./CatalogList.ts" lang="ts"></script>

<style src="./CatalogList.scss" lang="scss" scoped></style>
