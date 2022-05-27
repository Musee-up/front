<template>
  <v-dialog
    width="500"
    >
    <template #activator="{ on, attrs }">

      <v-btn
        rounded
        color="primary"
        class="white--text"
        v-bind="attrs"
        v-on="on"
        >
        {{ $t('pages.account.client.payment.card.action') }}
      </v-btn>

    </template>

    <v-card class="rounded-xl pa-4">
      <v-card-title class="text-h5">
        <v-container>
          <v-row class="justify-center">
            Ajouter un mode de paiement
          </v-row>
          <v-row class="ma-4">
            <v-divider></v-divider>
          </v-row>
        </v-container>
      </v-card-title>

      <v-card-text class="pa-4">
        <v-container>
        <v-row><h4>Titulaire de la carte</h4></v-row>
        <v-row><v-text-field></v-text-field></v-row>

        <v-row><h4>Numéro de la carte</h4></v-row>
        <v-row><v-text-field></v-text-field></v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="d-flex justify-center">
        <base-blue-button class="pa-4">
          Enregistrer
        </base-blue-button>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

