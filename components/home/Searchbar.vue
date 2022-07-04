<template>
  <v-row justify="center" align="center">
    <v-autocomplete
      v-if="$vuetify.breakpoint.mobile"
      filled
      solo
      hide-details="auto"
      class="pa-4 rounded-pill"
      label="Ou souhaitez vous allez ?"
      ></v-autocomplete>

    <v-sheet
      v-else
      outlined
      class="d-flex rounded-pill wrapper"
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
    </v-sheet>
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
<style lang="scss" scoped>
.wrapper {
  width: 1000px;
}
</style>
