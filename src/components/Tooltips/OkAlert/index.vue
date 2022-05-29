<template>
  <v-snackbar
  dark
      v-model="alert.isVisible"
      :color="alert.status === 'Success' ? 'primary' : 'error'"
      
    >
    <div class="d-flex justify-center">
        {{ alert.status }}
    </div>
      
    </v-snackbar>
</template>

<script src="./OkAlert.ts" lang="ts"></script>

<style src="./OkAlert.scss" lang="scss" scoped></style>
