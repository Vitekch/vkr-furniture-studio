<template>
  <v-card class="feedback">
    <p class="feedback--text">{{ feedback }}</p>
    <v-divider></v-divider>
    <h3 class="feedback--username">{{ username }}</h3>
  </v-card>
</template>

<script src="./FeedbackItem.ts" lang="ts"></script>

<style src="./FeedbackItem.scss" lang="scss" scoped></style>
