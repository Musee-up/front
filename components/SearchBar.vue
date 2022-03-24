<template>
  <v-container pa-0 fluid center>
    <v-row style="height:600px"></v-row>
    <v-row
      align="center"
      justify="center">
      <h1 style="font-size:65px;text-align:left">
        Le monde est un musée,<br>découvrez-le ! </h1>
    </v-row>
    <v-row
      align="center"
      justify="center">
      <v-date-picker
        v-model="date"
        no-title
        scrollable
        >
      </v-date-picker>
    </v-row>
  </v-container>
</template>

