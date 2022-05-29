<template>
  <v-dialog v-model="isVisible" max-width="600">
    <v-card>
      <v-container>
        <v-form ref="contactForm" @submit.prevent="submitHandler">
          <v-container>
            <v-row>
              <v-col class="text-justify">
                <h4 class="text-h4">Модель {{ model }}</h4>
              </v-col>
            </v-row>
            <v-divider class="my-5"></v-divider>
            <v-row>
              <v-col md="4" cols="12">
                <v-text-field
                  required
                  v-model="name"
                  label="Имя"
                  :rules="requiredRules"
                >
                </v-text-field>
              </v-col>
              <v-col md="4" cols="12">
                <v-text-field
                  required
                  v-model="phone"
                  label="Номер телефона"
                  type="tel"
                  :rules="[...requiredRules, ...phoneRules]"
                >
                </v-text-field>
              </v-col>
              <v-col md="4" cols="12">
                <v-text-field
                  required
                  v-model="email"
                  label="Электронная почта"
                  type="email"
                  :rules="[...requiredRules, ...emailRules]"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-end">
                <v-btn
                  small
                  outlined
                  dark
                  color="analogous_2 darken-2"
                  type="submit"
                >
                  Оставить заявку
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script src="./SetOrder.ts" lang="ts"></script>

<style src="./SetOrder.scss" lang="scss" scoped></style>
