<template>
  <v-menu
    ref="menu"
    offset-y
    v-model="menu"
    nudge-bottom="10px"
    :return-value.sync="date"
    transition="scale-transition"
    >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        style="align-self:center"
        hide-details="auto"
        v-model="date"
        rounded
        filled solo
        readonly
        v-bind="attrs"
        v-on="on"
        ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      no-title
      scrollable
      >
      <v-spacer></v-spacer>
      <v-btn
        text
        color="primary"
        @click="menu = false"
        >
        Cancel
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="$refs.menu.save(date)"
        >
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
}
</script>
