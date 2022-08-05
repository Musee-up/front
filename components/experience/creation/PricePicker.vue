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
        <component :is="component.name" v-model="component.data"></component>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { amountPerAgeDefault } from '@/types/Group'
import Experience from '@/types/Experience'

export default {
  props: {
    value: {
      type: Experience,
      required: true,
    },
  },
  data() {
    return {
      components: [
        {
          name: 'experience-creation-price-picker-item',
          data: this.value?.amountPerAge || amountPerAgeDefault,
        },
        {
          name: 'experience-creation-reduction-picker',
          data: this.value?.discountPerGroupSize || [],
        },
        {
          name: 'experience-creation-threshold-picker',
          data: {},
        },
      ],
    }
  },
  watch: {
    components: {
      handler(newValue) {
        const [amountPerAge, discountPerGroupSize, threshold] = Object.values(
          newValue
        ).map((x) => x.data)
        const value = {
          amountPerAge,
          discountPerGroupSize,
          threshold,
        }
        console.log(value)
        this.$emit('input', value)
      },
      deep: true,
    },
  },
}
</script>
