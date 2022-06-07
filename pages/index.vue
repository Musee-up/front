<template>
  <v-main class="pa-0">
    <v-container fluid>
      <v-row class="header">
        <home-searchbar></home-searchbar>
      </v-row>
      <about-heritage></about-heritage>
      <home-experiences></home-experiences>

    </v-container>
  </v-main>
</template>

<style scoped>


.header {
  background: url('@/static/home_bg.svg');
  background-size: cover;
  height: 905px;
}
</style>
