<template>
  <experience-creation-base-list-picker
    label="Tarifs par nbr. de places achetées"
    icon="mdi-sale"
  >
    <v-row v-for="(discount, index) in discounts" :key="index" class="my-2">
      <v-container>
        <core-range-discount v-model.number.number="discount.model"></core-range-discount>

        <v-row class="mx-2 pa-1">
          <v-divider></v-divider>
        </v-row>
      </v-container>
    </v-row>

    <v-row>
      <v-col>
        <core-range-discount v-model="defaultDiscount"></core-range-discount>
      </v-col>
      <v-col cols="2">
        <v-btn icon @click="addDiscount">
          <v-icon color="primary">mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="mx-2 pa-1">
      <v-divider></v-divider>
    </v-row>
  </experience-creation-base-list-picker>
</template>

<script>
import {
  Maybe,
  ComponentDiscountPerGroupSizeDiscountPerGroupSize,
} from '@/graphql/generated'

export default {
  props: {
    value: {
      type: Array<Maybe<ComponentDiscountPerGroupSizeDiscountPerGroupSize>>,
      default: () => [],
    },
  },
  data() {
    return {
      discounts: this.value.map((x) => ({
        model: x,
      })),
      defaultDiscount: {
        min: 0,
        max: 100,
        discount: 10,
      },
    }
  },
  watch: {
    discounts: {
      handler(newValue) {
        const input = newValue.map((x) => x.model)
        console.log(input)
        this.$emit('input', input)
      },
      deep: true,
    },
  },
  methods: {
    addDiscount() {
      this.discounts.push({
        model: {
          ...this.defaultDiscount,
        },
      })
    },
  },
}
</script>
