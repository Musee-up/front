<template>
  <v-row class="primary pa-4">
    <v-col v-for="(stat, index) in stats" :key="index">
      <v-row justify="center">
        <p class="font-weight-bold stat-value white--text text--center">
          {{ stat }} %
        </p>
      </v-row>
      <v-row>
        <p class="font-weight-medium white--text text-center">
          {{ $t(`pages.about.stats.${index}`) }}
        </p>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      stats: {
        woman: 79,
        consider: 45,
        salary: 47,
        numeric: 86,
        various: 79,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.stat-value {
  font-size: 50px;
}
</style>
