<template>
  <v-card class="feedback">
    <h3 class="feedback--username">{{ username }}</h3>
    <v-divider></v-divider>
    <p class="feedback--text">{{ feedback }}</p>
  </v-card>
</template>

<script src="./FeedbackItem.ts" lang="ts"></script>

<style src="./FeedbackItem.scss" lang="scss" scoped></style>
