<template>
  <v-container>
      <LoginForm v-if="!isAuth" @successLogin="isAuth = true"/>
      <v-row v-else>
        <v-col class="d-flex flex-column justify-center align-center" style="height: 100vh;">
            <div class="mb-10 d-flex justify-space-between" style="width: 1000px">
              <v-card width="450" class="pa-5">
                <h2 class="text-h2">Количество клиентов: {{ clientsCount }}</h2>
              </v-card>
              <v-card width="450" class="pa-5">
                <h2 class="text-h2">Количество заказов: {{ ordersCount }}</h2>
              </v-card>
            </div>
            <v-card width="1000">
                <Controls @typeChange="changeType" />
                <TableBlock  :tableType="tableType" />
            </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script src="./AdminView.ts" lang="ts"></script>

<style src="./AdminView.scss" lang="scss" scoped></style>
