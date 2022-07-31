<template>
  <v-row>
      <v-col>
          <v-data-table
            :headers="headers"
            :items="items"
          >
            <template v-slot:[`item.actions`]="{ item }">
                <v-btn icon x-small>
                    <v-icon>
                        mdi-pen
                    </v-icon>
                </v-btn>
                <v-btn icon x-small @click="deleteItem(item.id)">
                    <v-icon>
                        mdi-delete
                    </v-icon>
                </v-btn>
            </template>
          </v-data-table>
      </v-col>
      <ConfirmModal :isVisible="deleteModal.isVisible" :id="deleteModal.targetId" :table="tableType" @closeDialog="deleteModal.isVisible = false"/>
  </v-row>
</template>

<script src="./TableBlock.ts" lang="ts"></script>

<style src="./TableBlock.scss" lang="scss" scoped></style>
