<template>
  <div style="height: 100%" class="d-flex">
    <Sidebar />
    <CatalogContainer :category="category" />
  </div>
</template>

<script src="./CatalogView.ts" lang="ts"></script>

<style src="./CatalogView.scss" lang="scss" scoped></style>
