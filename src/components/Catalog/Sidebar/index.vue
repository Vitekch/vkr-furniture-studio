<template>
  <v-navigation-drawer permanent>
    <v-treeview
      dense
      hoverable
      color="primary darken-2"
      v-model="tree"
      :items="items"
      activatable
      item-key="value"
      open-on-click
      @update:active="changePath"
    >
      <template v-slot:prepend="{ item }">
        <v-icon>
          {{ item.icon }}
        </v-icon>
      </template>
      <template v-slot:label="{ item }">
        <h6>
          {{ item.name }}
        </h6>
      </template>
    </v-treeview>
  </v-navigation-drawer>
</template>

<script src="./Sidebar.ts" lang="ts"></script>

<style src="./Sidebar.scss" lang="scss" scoped></style>
