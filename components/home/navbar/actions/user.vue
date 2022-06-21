<template>
  <v-list>
    <v-list-item key="0" class="transparent">
      <v-btn class="pa-0" text @click.prevent="logout">
        <p class="ma-0 font-weight-regular">
          {{ $t('components.home.navbar.userActions.logout') }}
        </p>
      </v-btn>
    </v-list-item>

    <v-list-item v-for="(item, index) in user.actions" :key="index + 1">
      <nuxt-link :to="item.link">
        <p class="ma-0 font-weight-regular">
          {{ $t(item.label) }}
        </p>
      </nuxt-link>
    </v-list-item>

    <v-divider class="ma-4"></v-divider>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      user: {
        actions: [
          {
            label: 'components.home.navbar.userActions.client',
            link: '/account/client',
          },
          {
            label: 'components.home.navbar.userActions.guide',
            link: '/account/guide',
          },
        ],
      },
    }
  },
  methods: {
    logout() {
      this.$strapi.logout()
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
p {
  font-size: 18px;
  color: #24242c !important;
}
</style>
