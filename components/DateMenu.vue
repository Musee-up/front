<template>
  <v-menu
    ref="menu"
    v-model="menu"
    offset-y
    nudge-bottom="10px"
    nudge-right="60"
    min-width="0"
    :return-value.sync="date"
    :close-on-content-click="false"
    transition="scale-transition"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        label="choisissez la date"
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
      <v-btn
        text
        color="primary"
        @click="
          $refs.menu.save(date)
          $emit('date', date)
        "
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script setup type="ts">
const date = null
const menu = false
</script>
