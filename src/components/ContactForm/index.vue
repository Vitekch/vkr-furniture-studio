<template>
  <v-card max-width="600">
    <v-card-title> Свяжитесь с нами </v-card-title>
    <v-form ref="contactForm" @submit.prevent="submitHandler">
      <v-container>
        <v-row>
          <v-col>
            <v-btn
              block
              small
              elevation="1"
              :dark="action === 'feedback' ? true : false"
              :color="action === 'feedback' ? 'primary darken-2' : 'white'"
              @click="changeAction('feedback')"
            >
              Отправить отзыв
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              block
              small
              elevation="1"
              :dark="action === 'question' ? true : false"
              :color="action === 'question' ? 'primary darken-2' : 'white'"
              @click="changeAction('question')"
            >
              Задать вопрос
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-divider></v-divider>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" cols="12">
            <v-text-field
              required
              v-model="name"
              label="Имя"
              :rules="requiredRules"
            >
            </v-text-field>
          </v-col>
          <v-col md="6" cols="12">
            <v-text-field
              required
              v-model="email"
              label="E-mail"
              type="email"
              :rules="[...requiredRules, ...emailRules]"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              required
              outlined
              v-model="message"
              :rules="requiredRules"
            >
            </v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-end">
            <v-btn small outlined dark color="analogous_2 darken-2" type="submit">
              Отправить
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script src="./ContactForm.ts" lang="ts"></script>

<style src="./ContactForm.scss" lang="scss" scoped></style>
