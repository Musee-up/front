<template>
  <v-menu
    v-model="menu2"
    rounded="xl"
    :close-on-content-click="false"
    :nudge-bottom="60"
    :nudge-right="60"
    max-width="290px"
    min-width="290px"
    >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="time"
        label="Montant/Nbr. de personnes min."
        prepend-icon="mdi-car-speed-limiter"
        outlined
        rounded="xl"
        readonly
        v-bind="attrs"
        v-on="on"
        ></v-text-field>
    </template>
    <v-card
      v-if="menu2"
      class="pa-6"
      >
      <v-container>

        <v-row>
          <v-container>
            <v-row style="align-items:center">
              <v-col class="my-0 py-0">
                <p class="ma-0"> Adultes </p>
                <p class="ma-0 description-list--text">
                  <small> 18 ans et plus </small>
                </p>
              </v-col>
              <v-col class="my-0 py-0" cols="4">
                <v-text-field
                  hide-details="auto"
                  outlined
                  class="rounded-xl pa-2"
                  label="Prix"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mx-2 pa-1">
              <v-divider ></v-divider>
            </v-row>
          </v-container>
        </v-row>

        <v-row class="justify-center">
          <h4 class="black--text">Ou</h4>
        </v-row>

        <v-row>
          <v-container>
            <v-row style="align-items:center">
              <v-col class="my-0 py-0">
                <p class="ma-0"> Adultes </p>
                <p class="ma-0 description-list--text">
                  <small> 18 ans et plus </small>
                </p>
              </v-col>
              <v-col class="my-0 py-0" cols="4">
                <v-text-field
                  hide-details="auto"
                  outlined
                  class="rounded-xl pa-2"
                  label="Prix"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mx-2 pa-1">
              <v-divider ></v-divider>
            </v-row>
          </v-container>
        </v-row>

        <v-row class="justify-end">
          <base-blue-button text="Valider"></base-blue-button>
        </v-row>
      </v-container>
    </v-card>

  </v-menu>

</template>

<script>
export default {
  data () {
    return {
      peopleType: [...Array(4).keys()],
      time: null,
      menu2: false,
    }
  },
}
</script>

