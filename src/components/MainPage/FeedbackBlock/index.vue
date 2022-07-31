<template>
  <v-container class="feedback__container my-10">
    <h1 class="text-h1 mb-10 d-flex justify-center">Отзывы клиентов</h1>
      <transition-group
        name="slow-fade"
        tag="v-row"
      >
        <v-col
          md="4"
          cols="12"
          v-for="(feedback) in feedbacks"
          :key="feedback.id"
          class="d-flex justify-center"
        >
          <FeedbackItem
            :username="feedback.name"
            :feedback="feedback.feedback"
          />
        </v-col>
      </transition-group>
  </v-container>
</template>

<script src="./FeedbackBlock.ts" lang="ts"></script>

<style src="./FeedbackBlock.scss" lang="scss" scoped></style>
