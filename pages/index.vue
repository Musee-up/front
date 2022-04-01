<template>
  <v-app>
    <nuxt-img fit="cover" src="/home_bg.svg">
      <v-main fluid>
        <HomeSearchbar />
        <RegisterForm />
      </v-main>
    </nuxt-img>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
