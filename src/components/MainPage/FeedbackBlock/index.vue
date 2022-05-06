<template>
  <v-container class="feedback__container">
    <h1 class="mb-3">Отзывы клиентов</h1>
      <transition-group
        name="slow-fade"
        tag="v-row"
      >
        <v-col
          md="4"
          cols="12"
          v-for="(feedback) in feedbacks"
          :key="feedback.username"
          class="d-flex justify-center"
        >
          <FeedbackItem
            :username="feedback.username"
            :feedback="feedback.feedback"
          />
        </v-col>
      </transition-group>
  </v-container>
</template>

<script src="./FeedbackBlock.ts" lang="ts"></script>

<style src="./FeedbackBlock.scss" lang="scss" scoped></style>
