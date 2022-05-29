<template>
  <v-dialog v-model="isVisible" max-width="400">
    <v-card>
      <v-container class="d-flex justify-center flex-column align-center">
        <img height="200" width="200" class="rounded" :src="item.image || ''" />
        <v-divider class="my-5" />
        <div class="text-body-2">
          Дизайнер - {{ item.designer || "" }}
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script src="./ItemDescription.ts" lang="ts"></script>

<style src="./ItemDescription.scss" lang="scss" scoped></style>
