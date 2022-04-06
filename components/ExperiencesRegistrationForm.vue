<template>
  <v-card
    rounded
    class="d-flex flex-column rounded-xl align-center text-center"
    style="width: 450px"
  >
    <v-card-title>
      <span class="text-h5 text-center">
        {{ $t('À partir de 18€ par personne') }}
      </span>
    </v-card-title>
    <v-card-text>
      <DateMenu style="width: 50px" />
    </v-card-text>
    <v-card-actions>
      <base-blue-button text="Réserver" />
    </v-card-actions>
  </v-card>
</template>
