<template>
  <v-container class="d-flex justify-center">
    <v-card max-width="600" class="mt-10 pt-4">
      <v-form ref="contactForm" @submit.prevent="submitHandler">
        <v-container>
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
                v-model="address"
                label="Адрес"
                :rules="[...requiredRules]"
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
    </v-card>
  </v-container>
</template>

<script src="./OriginalDesignForm.ts" lang="ts"></script>

<style src="./OriginalDesignForm.scss" lang="scss" scoped></style>
