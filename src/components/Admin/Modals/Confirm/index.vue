<template>
  <v-dialog v-model="isVisible" width="400" persistent>
    <v-card>
      <v-container>
        <h2>Вы уверены?</h2>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn x-small text @click="cancelHandler"> Отмена </v-btn>
        <v-btn x-small color="error lighten-1" class="ml-2" @click="confirmHandler"> Удалить </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script src="./Confirm.ts" lang="ts"></script>

<style src="./Confirm.scss" lang="scss" scoped></style>
