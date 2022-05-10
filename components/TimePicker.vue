<template>
  <v-menu
    ref="menu"
    v-model="menu2"
    offset-y
    nudge-bottom="10px"
    nudge-right="60"
    min-width="0"
    :return-value.sync="time"
    :close-on-content-click="false"
    transition="scale-transition"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="time"
        style="align-self: center"
        hide-details="auto"
        rounded
        label="choisisser l'heure"
        filled
        solo
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-time-picker
      v-model="time"
      format="24hr"
      @click:minute="$refs.menu.save(time); $emit('time', time)"
    >
    </v-time-picker>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      time: null,
      menu2: false,
    }
  },
}
</script>
