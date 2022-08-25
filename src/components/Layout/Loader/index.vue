<template>
    <div class="loader__overlay" v-if="isLoading">
        <img
          class="loader__gif"
          src="../../../assets/loader.gif"
          width="300"
          height="300"
        />
        <div class="loader__text">
            Загрузка...
        </div>
    </div>
</template>

<script src="./Loader.ts" lang="ts" />

<style src="./Loader.scss" lang="scss" scoped></style>