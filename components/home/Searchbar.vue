<template>
  <v-row justify="center" align="center">
    <v-card
      align="center"
      justify="center"
      class="d-flex rounded-pill"
      style="width: 1000px"
      >
      <v-autocomplete
        filled
        solo
        hide-details="auto"
        class="pa-4 rounded-pill"
        label="Ou souhaitez vous allez ?"
        ></v-autocomplete>
      <DateMenu />
      <v-select
        filled
        solo
        hide-details="auto"
        :items="peopleNumber"
        type="number"
        class="pa-4 rounded-pill"
        label="Nombres de visiteurs"
        ></v-select>

      <v-btn
        icon
        x-large
        color="primary"
        class="pr-4"
        style="align-self: center"
        >
        <v-icon color="primary"> mdi-magnify </v-icon>
      </v-btn>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data: () => {
    return {
      peopleNumber: [...Array(5).keys()],
    }
  },
}
</script>
