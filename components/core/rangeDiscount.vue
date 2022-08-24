<template>
  <v-row align="center">
    <v-col class="my-0 py-0">
      <v-range-slider
        v-model="rangeSlider"
        step="5"
        max="100"
        min="0"
      ></v-range-slider>
      <p class="ma-0">De {{ range.min }} a {{ range.max }} places</p>
    </v-col>
    <v-col class="my-0 py-0" cols="4">
      <v-text-field
        v-model="range.discount"
        type="number"
        hide-details="auto"
        outlined
        class="rounded-xl pa-2"
        label="Prix"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
// import { ComponentDiscountPerGroupSizeDiscountPerGroupSize } from '@/graphql/generated'

export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      range: this.value,
    }
  },
  computed: {
    rangeSlider: {
      get() {
        return [this.range.min, this.range.max]
      },
      set(value) {
        this.range.min = value[0]
        this.range.max = value[1]
      },
    },
  },
  watch: {
    range: {
      handler(newValue) {
        newValue.discount = parseInt(newValue.discount)
        this.$emit('input', newValue)
      },
      deep: true,
    },
  },
}
</script>
