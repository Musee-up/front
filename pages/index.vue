<template>
  <v-container fluid class="px-0">
    <v-row class="header">
      <v-col class="mb-md-16 pa-md-16 pa-0 ma-0 wrapper d-flex justify-center">
        <home-headline></home-headline>
        <home-searchbar class="searchbar"> </home-searchbar>
      </v-col>
    </v-row>
    <home-experiences></home-experiences>
    <about-heritage class="pt-xs-0 pt-16"></about-heritage>
    <home-partnership></home-partnership>
  </v-container>
</template>

<style scoped lang="scss">
.header {
  background: url('@/static/home_bg.svg');
  background-size: cover;
  height: 905px;
  @include for-phone-only {
    height: 500px;
  }
}

.wrapper {
  position: relative;
  z-index: 1;
}

.searchbar {
  position: absolute;
  bottom: -25px;
}
</style>
