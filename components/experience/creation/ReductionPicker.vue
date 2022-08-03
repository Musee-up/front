<template>
  <experience-creation-base-list-picker
    label="Tarifs par nbr. de places achetées"
    icon="mdi-sale"
  >
    <v-row v-for="(reduction, index) in value" :key="index" class="my-2">
      <v-container>
        <v-row style="align-items: center">
          <v-col class="my-0 py-0">
            <p class="ma-0">De {{ reduction.min }} a {{reduction.max}} places</p>
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
<v-row style="align-items: center">
          <v-col class="my-0 py-0">
            <p class="ma-0">De {{ reduction.min }} a {{reduction.max}} places</p>
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

  </experience-creation-base-list-picker>
</template>

<script>
import { Maybe, ComponentDiscountPerGroupSizeDiscountPerGroupSize } from '@/graphql/generated'

export default {
  props: {
    value: {
      type: Array<Maybe<ComponentDiscountPerGroupSizeDiscountPerGroupSize>>,
      default: () => [],
    },
  },
}
</script>
