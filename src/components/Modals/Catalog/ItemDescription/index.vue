<template>
  <v-dialog v-model="isVisible">
    <v-card>
      <v-container class="d-flex justify-center flex-column align-center">
        <img height="700" width="900" class="rounded" :src="item.image || ''" />
        <v-divider class="my-5" ></v-divider>
        <div class="text-body-2">
          Дизайнер - {{ item.designer || "" }}
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script src="./ItemDescription.ts" lang="ts"></script>

<style src="./ItemDescription.scss" lang="scss" scoped></style>
