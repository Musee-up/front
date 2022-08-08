<template>
  <experience-creation-base-list-picker
    label="Tarifs par catégorie d'ages"
    icon="mdi-account-group"
  >
    <v-row v-for="(rageAnge, index) in value" :key="index" class="my-2">
      <v-container>
        <v-row align="center">
          <v-col class="my-0 py-0">
            <p class="ma-0">
              {{ index }}
            </p>
            <p class="ma-0 description-list--text">
              <small>
                {{
                  $t(
                    'components.experience.creation.pricePicker.item.description'
                  )
                }}
              </small>
            </p>
          </v-col>
          <v-col class="my-0 py-0" cols="4">
            <v-text-field
              v-model.number="rageAnge.amount"
              hide-details="auto"
              type="number"
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
import { ComponentAmountPerAgeAmountPerAge } from '@/graphql/generated'

export default {
  props: {
    value: {
      type: ComponentAmountPerAgeAmountPerAge,
      required: true,
    },
  },
  watch: {
    value: {
      handler(newValue) {
        this.$emit('input', newValue)
      },
      deep: true,
    },
  },
}
</script>
