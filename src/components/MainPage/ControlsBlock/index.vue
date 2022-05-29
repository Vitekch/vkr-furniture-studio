<template>
  <v-container fluid class="pa-0">
    <v-sheet
      color="var(--main-dark)"
      height="400"
      dark
      class="d-flex justify-center align-center control__container"
    >
      <a class="control__link" @click="changePath('/services/original-design')">
        Услуги дизайнера
        <div class="underline"></div>
      </a>
      <div class="mx-15"></div>
      <!-- <a
        class="control__link mx-15"
        @click="changePath('/services/design-projects')"
      >
        Готовые дизайн-проекты
        <div class="underline"></div>
      </a> -->
      <a class="control__link" @click="changePath('/catalog/living-room')">
        Каталог
        <div class="underline"></div>
      </a>
    </v-sheet>
  </v-container>
</template>

<script src="./ControlsBlock.ts" lang="ts"></script>

<style src="./ControlsBlock.scss" lang="scss" scoped></style>
