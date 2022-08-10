<template>
  <v-card rounded="xl">
    <v-card-title class="text-center">
      <h4 class="text-h5 text-center">
        {{
          $t('components.experience.creation.pricePicker.title', {
            price: value.amountPerAge.adult.amount,
          })
        }}
      </h4>
    </v-card-title>

    <v-container>
      <p>{{ value.amountPerAge }}</p>
      <v-row v-for="(component, index) in components" :key="index" class="mx-4">
        <component :is="component.name" v-model="component.data"></component>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { amountPerAgeDefault } from '@/types/Group'

export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        amountPerAge: amountPerAgeDefault,
        discountPerGroupSize: [],
        thresholds: {
          groupSizeMin: 0,
          groupSizeMax: 0,
        },
      }),
    },
  },
  data() {
    return {
      components: [
        {
          name: 'experience-creation-price-picker-item',
          data: this.value.amountPerAge,
        },
        {
          name: 'experience-creation-reduction-picker',
          data: this.value.discountPerGroupSize,
        },
        {
          name: 'experience-creation-threshold-picker',
          data: {
            ...this.value.thresholds,
          },
        },
      ],
    }
  },
  watch: {
    components: {
      handler(newValue) {
        const [amountPerAge, discountPerGroupSize, thresholds] = Object.values(
          newValue
        ).map((x) => x.data)
        const value = {
          ...this.value,
          amountPerAge,
          discountPerGroupSize,
          thresholds,
        }
        delete value.discountPerGroupSize.id
        this.$emit('input', value)
      },
      deep: true,
    },
  },
}
</script>
