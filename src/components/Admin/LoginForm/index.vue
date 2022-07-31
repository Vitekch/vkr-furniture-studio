<template>
  <v-row>
    <v-col class="d-flex justify-center align-center" style="height: 100vh;">
      <v-card width="600">
        <v-card-title>
          <h1 class="text-h1">Вход</h1>
        </v-card-title>
        <v-divider></v-divider>
        <v-form ref="loginForm" @submit.prevent="auth">
          <v-container>
            <v-text-field v-model="login" label="Логин" :rules="requiredRule"> </v-text-field>
            <v-text-field v-model="password" label="Пароль" type="password" :rules="requiredRule">
            </v-text-field>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary darken-2" type="submit"> Вход </v-btn>
            </v-card-actions>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script src="./LoginForm.ts" lang="ts"></script>

<style src="./LoginForm.scss" lang="scss" scoped></style>
