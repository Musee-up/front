<template>
  <v-main>
    <!-- <nuxt-img fit="cover" src="/home_bg.svg"> -->
    <v-container>
      <HomeSearchbar />
    </v-container>
    <!-- </nuxt-img> -->
  </v-main>
</template>

<script>
export default {}
</script>

<style scoped>
.v-main {
  background: url('@/static/home_bg.svg');
  background-size: cover;
  height: 905px;
}
</style>
