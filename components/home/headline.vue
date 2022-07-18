<template>
  <v-row align="center" justify="center" class="mt-0 mt-md-16">
    <v-col class="text-center pa-4">
      <v-row justify="center">
        <h1>
          {{ $t('components.home.headline.create') }}
        </h1>
      </v-row>
      <v-row>
        <v-icon size="100" color="white"> mdi-palette-outline </v-icon>
      </v-row>
      <v-row>
        <h1>
          {{ $t('components.home.headline.fewClick') }}
        </h1>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>

.col {
  > * {
    justify-content: center;
  }
}
</style>
