<template>
  <v-btn class="pa-0" text @click.prevent="logout">
    <p class="ma-0 font-weight-regular">
      {{ $t('components.home.navbar.userActions.logout') }}
    </p>
  </v-btn>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$strapi.logout()
      this.$router.push('/')
    },
  },
}
</script>
