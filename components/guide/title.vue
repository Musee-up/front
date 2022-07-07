<template>
  <v-row class="titleContainer justify-center">
    <h1 class="title">
      {{ $t('components.guide.title') }}
    </h1>
  </v-row>
</template>

<style lang="scss" scoped>
.title {
  background-color: $white !important;
  color: $_blue;
  font-size: 47px !important;
  @include for-phone-only {
    font-size: 25px !important;
  }
}
</style>
