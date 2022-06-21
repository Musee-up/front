<template>
  <v-row class="filter ml-16">
    <v-chip-group v-model="selected" multiple>
      <v-chip
        v-for="filter in filters"
        :key="filter"
        color="primary"
        outlined
        class="filterItem"
      >
        {{ filter }}
      </v-chip>
    </v-chip-group>
  </v-row>
</template>

<script>
export default {
  props: ['filters'],
  data() {
    return {
      selected: [],
    }
  },
}
</script>
