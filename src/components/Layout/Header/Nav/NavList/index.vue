<template>
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      link
      :to="item.to"
      :width="width"
      dense
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon || "" }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script src="./NavList.ts" lang="ts"></script>

<style src="./NavList.scss" lang="scss" scoped></style>
