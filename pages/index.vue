<template>
  <v-main class="pa-0">
    <v-container fluid>
      <v-row class="header">
        <v-col class="mb-16 wrapper d-flex justify-center">
          <home-headline></home-headline>
          <home-searchbar class="searchbar">
          </home-searchbar>
        </v-col>
      </v-row>
      <home-experiences></home-experiences>
      <about-heritage class="pt-16"></about-heritage>
      <home-partnership></home-partnership>
    </v-container>
  </v-main>
</template>

<style scoped>

.header {
  background: url('@/static/home_bg.svg');
  background-size: cover;
  height: 905px;
}

.wrapper {
  position: relative;
  z-index: 1;
}

.searchbar {
  position:  absolute;
  bottom: -25px;
}

</style>
