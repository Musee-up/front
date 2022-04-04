<template>
  <v-menu
    ref="menu"
    v-model="menu"
    offset-y
    nudge-bottom="10px"
    :return-value.sync="date"
    transition="scale-transition"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        style="align-self: center"
        hide-details="auto"
        rounded
        filled
        solo
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script setup>
const date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  .toISOString()
  .substr(0, 10)
const menu = false
</script>
