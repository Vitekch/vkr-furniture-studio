<template>
  <v-card width="100%" min-height="200">
    <v-card-title class="px-0 pt-0">
      <img width="100%" src="@/assets/chair.jpg" />
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="text-justify">
      {{ item.name }}
    </v-card-text>
    <!-- <v-card-actions>
      <v-btn elevation="1" rounded block x-small color="secondary">
        Подробнее...
      </v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script src="./CatalogItem.ts" lang="ts"></script>

<style src="./CatalogItem.scss" lang="scss" scoped></style>
