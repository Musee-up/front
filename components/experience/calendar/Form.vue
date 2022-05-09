<template>
  <div class="text-center">
    <v-dialog
      v-model="menu"
      width="500"
      >
      <template #activator="{ on, attrs }">
        <v-btn
          color="blue lighten-2"
          v-bind="attrs"
          v-on="on"
          >
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          Ajout d’un créneau de visite partagée
        </v-card-title>
        <v-card-text>
          <v-container>

            <v-row>
              <v-divider class="mb-2"></v-divider>
            </v-row>

            <v-row>
              <h4>CHOIX DE L'EXPÉRIENCE</h4>
            </v-row>

            <v-row>
              <v-select :items="[]">
              </v-select>
            </v-row>

            <v-row>
              <v-divider class="mb-2"></v-divider>
            </v-row>


            <v-row>
              <h4>CHOIX DE LA DATE</h4>
            </v-row>
            <v-row>
              <date-menu></date-menu>
            </v-row>

            <v-row>
              <v-divider class="ma-4">
              </v-divider>
            </v-row>

            <v-row>
              <h4>CHOIX DU CRÉNEAU</h4>
              <time-picker></time-picker>
            </v-row>

            <v-row>
              <v-divider class="ma-4">
              </v-divider>
            </v-row>

          </v-container>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn
            rounded
            class="white--text blue" @click="menu = false">
            Valider
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: false
    }
  },
  // apollo: {
  //  guideProfile: {
  //    query: guideQuery,
  //    variables() {
  //      return {
  //        id: this.guide?.data.id.toString(),
  //      }
  //    },
  //  },
  // },
}
</script>
