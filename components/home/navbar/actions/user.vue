<template>
  <v-list>
    <v-list-item key="0" class="transparent">
      <core-logout></core-logout>
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
  
}
</script>

<style lang="scss" scoped>
p {
  font-size: 18px;
  color: #24242c !important;
}
</style>
