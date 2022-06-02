<template>
  <v-card
    rounded
    class="d-flex flex-column rounded-xl align-center text-center"
    style="width: 450px"
  >
    <v-card-title>
      <span class="text-h5 text-center">
        {{
          $t('components.experience.creation.pricePicker.title', { price: 18 })
        }}
      </span>
    </v-card-title>

    <v-container>
      <v-row class="mx-4">
        <experience-creation-price-picker-item></experience-creation-price-picker-item>
      </v-row>
      <v-row class="mx-4">
        <experience-creation-reduction-picker></experience-creation-reduction-picker>
      </v-row>
      <v-row class="mx-4">
        <experience-creation-threshold-picker></experience-creation-threshold-picker>
      </v-row>
    </v-container>
  </v-card>
</template>
