<template>
  <experience-creation-base-list-picker
    label="Montant/Nbr. de personnes min."
    icon="mdi-car-speed-limiter"
  >
    <v-row>
      <v-container>
        <v-row style="align-items: center">
          <v-col class="my-0 py-0">
            <p class="ma-0">Adultes</p>
            <p class="ma-0 description-list--text">
              <small> 18 ans et plus </small>
            </p>
          </v-col>
          <v-col class="my-0 py-0" cols="4">
            <v-text-field
              hide-details="auto"
              outlined
              class="rounded-xl pa-2"
              label="Prix"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-2 pa-1">
          <v-divider></v-divider>
        </v-row>
      </v-container>
    </v-row>

    <v-row class="justify-center">
      <h4 class="black--text">Ou</h4>
    </v-row>

    <v-row>
      <v-container>
        <v-row style="align-items: center">
          <v-col class="my-0 py-0">
            <p class="ma-0">Adultes</p>
            <p class="ma-0 description-list--text">
              <small> 18 ans et plus </small>
            </p>
          </v-col>
          <v-col class="my-0 py-0" cols="4">
            <v-text-field
              hide-details="auto"
              outlined
              class="rounded-xl pa-2"
              label="Prix"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-2 pa-1">
          <v-divider></v-divider>
        </v-row>
      </v-container>
    </v-row>
  </experience-creation-base-list-picker>
</template>

<script>
export default {
  data() {
    return {
      peopleType: [...Array(4).keys()],
      time: null,
      menu2: false,
    }
  },
}
</script>
