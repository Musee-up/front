<template>
  <v-container pa-0 fluid center fill-height>
    <v-row align="center" justify="center">
      <h1 style="font-size: 65px; text-align: left">
        Le monde est un musée,<br />découvrez-le !
      </h1>
    </v-row>
    <v-row align="center" justify="center">
      <v-card
        align="center"
        justify="center"
        class="d-flex rounded-pill"
        style="
           {
            background-color: white;
            width: 1000px;
          }
        "
      >
        <!-- add model here -->
        <!-- <v-date-picker no-title scrollable> </v-date-picker> -->
        <v-autocomplete
          filled
          solo
          hide-details="auto"
          class="pa-4 rounded-pill"
          label="Ou souhaitez vous allez ?"
        ></v-autocomplete>
        <DateMenu />
        <v-select
          :items="peopleNumber"
          type="number"
          solo
          hide-details="auto"
          class="pa-4 rounded-pill"
          label="Nombres de visiteurs"
        ></v-select>

        <v-btn
          icon
          x-large
          color="blue"
          class="pr-4"
          style="align-self: center"
        >
          <v-icon color="blue"> mdi-magnify </v-icon>
        </v-btn>
      </v-card>
    </v-row>
  </v-container>
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
