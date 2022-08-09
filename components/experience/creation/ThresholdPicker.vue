<template>
  <experience-creation-base-list-picker
    :label="$t('components.experience.creation.threshold')"
    icon="mdi-car-speed-limiter"
  >
    <v-row>
      <v-container>
        <v-row align="center">
          <v-col class="my-0 py-0">
            <p class="ma-0 description-list--text">
              <small> Nombre de personne min </small>
            </p>
          </v-col>
          <v-col class="my-0 py-0" cols="4">
            <v-text-field
              v-model.number="thresholds.groupSizeMin"
              hide-details="auto"
              outlined
              class="rounded-xl pa-2"
              type="number"
              label="Prix"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-2 pa-1">
          <v-divider></v-divider>
        </v-row>
      </v-container>
    </v-row>

    <v-row>
      <v-container>
        <v-row align="center">
          <v-col class="my-0 py-0">
            <p class="ma-0 description-list--text">
              <small> Nombre de personne max </small>
            </p>
          </v-col>
          <v-col class="my-0 py-0" cols="4">
            <v-text-field
              v-model.number="thresholds.groupSizeMax"
              type="number"
              hide-details="auto"
              outlined
              class="rounded-xl pa-2"
              label="Prix"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </experience-creation-base-list-picker>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      thresholds: this.value || {},
    }
  },
  watch: {
    thresholds: {
      handler(newValue) {
        this.$emit('input', newValue)
      },
      deep: true,
    },
  },
}
</script>
