<template>
  <v-card width="100%" min-height="200">
    <v-card-title class="px-0 pt-0">
    <img
    width="100%"
      src="http://www.diy.ru/media/st/0d/eb/b6/de2ef6b27667445226aa7ffa602d9d5514.jpg"
    />
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="text-justify">
      {{ description }}
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn elevation="1" rounded block x-small color="secondary"> Подробнее... </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script src="./DesignProjectCard.ts" lang="ts"></script>

<style src="./DesignProjectCard.scss" lang="scss" scoped></style>
