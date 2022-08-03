<template>
  <v-card rounded="xl">
    <v-card-title class="text-center">
      <h4 class="text-h5 text-center">
        {{
          $t('components.experience.creation.pricePicker.title', { price: 18 })
        }}
      </h4>
    </v-card-title>

    <v-container>
      <p>
        {{ components }}
      </p>
      <v-row v-for="(component, index) in components" :key="index" class="mx-4">
        <component
        :is="component.name" v-bind="component.data"></component>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { amountPerAgeDefault } from '@/types/Group'

export default {
  data() {
    return {
      components: [
        {
          name: 'experience-creation-price-picker-item',
          data: {
            model: amountPerAgeDefault,
          },
        },
        {
          name: 'experience-creation-reduction-picker',
          data: {},
        },
        {
          name: 'experience-creation-threshold-picker',
          data: {},
        },
      ],
      AgeRange: Object.keys(amountPerAgeDefault),
    }
  },
  watch: {
    components: {
      handler(newValue) {
        console.log('components new value', newValue)
        this.$emit('input', newValue)
      },
      deep: true,
    },
  }
}
</script>
