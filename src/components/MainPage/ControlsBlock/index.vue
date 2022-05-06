<template>
  <v-container fluid class="pa-0">
    <v-sheet
      color="var(--main-dark)"
      height="400"
      dark
      class="d-flex justify-center align-center control__container"
    >
      <a class="control__link" @click="changePath('/design')">
        Услуги дизайнера
        <div class="underline"></div>
      </a>
      <a class="control__link mx-15" @click="changePath('/design2')">
        Готовые дизайн-проекты
        <div class="underline"></div>
      </a>
      <a class="control__link" @click="changePath('/design3')">
        Каталог
        <div class="underline"></div>
      </a>
    </v-sheet>
  </v-container>
</template>

<script src="./ControlsBlock.ts" lang="ts"></script>

<style src="./ControlsBlock.scss" lang="scss" scoped></style>
