<template>
  <experience-creation-base-list-picker
    label="Tarifs par catégorie d'ages"
    icon="mdi-account-group"
    >
    <v-row v-for="(i, index) in peopleType" :key="index" class="my-2">
      <v-container>
        <v-row style="align-items: center">
          <v-col class="my-0 py-0">
            <p class="ma-0">
              $t('components.experience.creation.pricePicker.item.title)
            </p>
            <p class="ma-0 description-list--text">
              <small>
                $t('components.experience.creation.pricePicker.item.description)
              </small>
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
      menu2: false,
    }
  },
}
</script>
