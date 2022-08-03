<template>
  <v-menu
    ref="menu"
    v-model="menu"
    content-class="rounded-xl"
    offset-y
    nudge-bottom="10px"
    min-width="0"
    :close-on-content-click="false"
    transition="scale-transition"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="groupAbstract"
        :label="label"
        style="align-self: center"
        hide-details="auto"
        rounded
        color="primary"
        filled
        solo
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>

    <v-card active-class="rounded-xl" class="rounded-xl card">
      <v-card-text>
        <v-row v-for="(quantityPerAge, i) in value" :key="i">
          <v-col>
            <p>
              {{ i }}
            </p>
          </v-col>
          <v-col cols="8">
            <core-number-input
              v-model="quantityPerAge.quantity"
              :disabled="total >= maxGroupSize"
            >
            </core-number-input>
          </v-col>
        </v-row>
        <v-row>
          {{ total }}
          {{ maxGroupSize }}
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="submit"> OK </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import { QuantityPerAges } from '@/types/Group'

export default {
  props: {
    value: {
      type: QuantityPerAges,
      default: '',
    },
    maxGroupSize: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      menu: false,
      groupAbstract: '',
      label: 'choisissez votre groupe',
    }
  },
  computed: {
    total() {
      return Object.values(this.value).reduce(
        (acc, age) => acc + age.quantity,
        0
      )
    },
  },
  watch: {
    value(val) {
      this.$emit('input', val)
      this.label = this.value
        .map((quantityPerAge, i) => `${i} - ${quantityPerAge.quantity}`)
        .join(', ')
    },
  },
  methods: {
    submit() {
      this.$emit('input', this.value)
      this.groupAbstract = this.total + ' personnes'
      this.menu = false
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 400px;
}
</style>
