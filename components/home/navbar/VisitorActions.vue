<template>
  <div>
    <v-menu
      content-class="rounded-xl white pr-16"
       nudge-bottom="50"
       nudge-left="120">
      <template #activator="{ on, attrs }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
        >
          <v-icon color="primary"> mdi-account-circle </v-icon>
          <v-icon color="primary" small> mdi-menu-down-outline </v-icon>
        </v-btn>
      </template>

      <home-navbar-actions-user v-if="$strapi.user"></home-navbar-actions-user>

      <v-list v-else class="rounded-xl">
        <v-list-item v-for="(item, i) in visitor.actions" :key="i">
          <component :is="item.component">
            <p class="ma-0 font-weight-regular">
              {{ $t(item.label) }}
            </p>
          </component>
        </v-list-item>

        <v-divider class="ma-4"></v-divider>

        <v-list-item
          v-for="(item, j) in visitor.informations"
          :key="j + visitor.actions.length"
        >
          <nuxt-link :to="item.link">
            <p>
              {{ $t(item.label) }}
            </p>
          </nuxt-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visitor: {
        actions: [
          {
            label: 'components.home.navbar.register.button',
            component: 'home-navbar-register',
          },
          {
            label: 'components.home.navbar.login.button',
            component: 'home-navbar-login',
          },
        ],
        informations: [
          {
            label: 'components.home.navbar.visitorActions.becomeGuide',
            link: '#',
          },
          {
            label: 'components.home.navbar.visitorActions.help',
            link: '#',
          },
          {
            label: 'components.home.navbar.visitorActions.contact',
            link: '#',
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
p {
  color: #24242c !important;
}
</style>
