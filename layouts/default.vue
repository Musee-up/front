<template>
  <v-app>
    <HomeNavbar />
    <v-main>
      <Nuxt v-if="!$slots.default" />
      <slot></slot>
    </v-main>
    <HomeFooter />
  </v-app>
</template>

<script>
export default {}
</script>
