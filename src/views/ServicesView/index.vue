<template>
  <div>
    <Heading :service="service" />
    <component :is="body" />
  </div>
</template>

<script src="./ServicesView.ts" lang="ts"></script>

<style src="./ServicesView.scss" lang="scss" scoped></style>
