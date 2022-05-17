<template>
  <v-card width="100%" min-height="200">
    <v-card-title class="px-0 pt-0">
      <img width="100%" src="@/assets/chair.jpg" />
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="text-justify">
      {{ item.name }}
    </v-card-text>
    <v-card-actions class="d-flex flex-column justify-center">
      <v-btn
        elevation="1"
        rounded
        block
        x-small
        class="text-none"
        color="secondary"
        @click="setDescribedItem"
      >
        Подробнее...
      </v-btn>
      <v-btn
        elevation="1"
        rounded
        dark
        block
        x-small
        class="ma-0 mt-2 text-none"
        color="analogous_2 darken-1"
        @click="setOrderModel"
      >
        Заказать
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script src="./CatalogItem.ts" lang="ts"></script>

<style src="./CatalogItem.scss" lang="scss" scoped></style>
