<template>
  <v-app>
    <!-- <HomeNavbar /> -->
    <v-main>
      <div>
        <NuxtLink
          to="/"
          >
          <nuxt-img src="/logo_white.svg">
          </nuxt-img>
        </NuxtLink>
      </div>

      <Nuxt v-if="!$slots.default" />
      <slot></slot>
    </v-main>
    <HomeFooter />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      logo: '@/static/logo_white.svg',
    }
  },
}
</script>
