<template>
  <v-dialog
    v-model="menu"
    content-class="rounded-xl"
    offset-y
    width="40%"
    nudge-bottom="10px"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        rounded
        color="primary"
        class="white--text"
        v-bind="attrs"
        v-on="on"
      >
        Réserver
      </v-btn>
    </template>

    <v-card active-class="rounded-xl ma-4" class="rounded-xl">
      <v-card-title>
        <v-container>
          <v-row class="mb-4">
            <h2>Récapitulatif</h2>
          </v-row>
          <v-row class="mt-4">
            <v-divider></v-divider>
          </v-row>
        </v-container>
      </v-card-title>
      <v-card-text>
        <v-container class="mx-4">
          <v-row>
            {{ experience }}
          </v-row>
          <account-client-reservations-experience :experience="experience">
          </account-client-reservations-experience>
          <v-divider></v-divider>
          <account-client-reservations-guide :guide="guide">
          </account-client-reservations-guide>
          <v-divider></v-divider>
          <account-client-reservations-group>
          </account-client-reservations-group>
          <v-divider></v-divider>
          <account-client-reservations-attributes :booking="booking">
          </account-client-reservations-attributes>
        </v-container>
      </v-card-text>

      <v-card-actions class="justify-center">
        <base-blue-button> Valider et payer </base-blue-button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['experience', 'booking', 'guide'],
  data() {
    return {
      menu: false,
    }
  },
}
</script>
