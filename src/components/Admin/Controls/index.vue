<template>
  <v-tabs v-model="selected" @change="changeHandler" color="primary darken-2">
    <v-tab key="clients">Клиенты</v-tab>
    <v-tab key="orders">Заказы</v-tab>
    <v-tab key="feedbacks">Обращения</v-tab>
    <v-tab key="odr-furniture">Заказанная мебель (кат.)</v-tab>
    <v-tab key="orig-furniture">Заказанная мебель (инд.)</v-tab>
    <v-tab key="furniture-catalog">Каталог мебели</v-tab>
  </v-tabs>
</template>

<script src="./Controls.ts" lang="ts"></script>

<style src="./Controls.scss" lang="scss" scoped></style>
