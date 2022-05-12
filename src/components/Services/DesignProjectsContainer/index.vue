<template>
  <v-container>
    <v-row>
      <v-col v-for="card in cardsData" :key="card.id" md="3" sm="6" cols="12">
        <DesignProjectCard :description="card.description" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./DesignProjectsContainer.ts" lang="ts"></script>

<style src="./DesignProjectsContainer.scss" lang="scss" scoped></style>
