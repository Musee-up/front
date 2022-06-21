<template>
  <v-menu
    ref="menu"
    v-model="menu"
    style="width: 200px"
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
        style="width: 80%"
        hide-details="auto"
        rounded
        filled
        solo
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      :allowed-dates="allowedDates"
      no-title
      scrollable
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
      <v-btn
        text
        color="primary"
        @click="
          $refs.menu.save(date)
          $emit('picked', date)
        "
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: ['allowedDates'],
  data() {
    return {
      menu: false,
      date: undefined,
    }
  },
}
</script>
