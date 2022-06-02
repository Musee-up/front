<template>
  <div>
    <v-menu nudge-bottom="50" nudge-left="120">
      <template #activator="{ on, attrs }">
        <v-btn
          style="background-color: transparent"
          elevation="0"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon color="primary"> mdi-account-circle </v-icon>
          <v-icon color="primary" small> mdi-menu-down-outline </v-icon>
        </v-btn>
      </template>

      <v-list v-if="$strapi.user" class="rounded-xl">
        <v-list-item key="0" class="justify-center">
          <v-btn text @click.prevent="() => $strapi.logout()">
            <p>
              {{ $t('components.home.navbar.userActions.logout') }}
            </p>
          </v-btn>
        </v-list-item>

        <v-list-item v-for="(item, index) in user.actions" :key="index + 1">
          <nuxt-link :to="item.link">
            <p>
              {{ $t(item.label) }}
            </p>
          </nuxt-link>
        </v-list-item>
        <v-divider class="ma-4"></v-divider>
      </v-list>

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

    <v-btn class="rounded-lg blue-filled" background="blue">
      <NuxtLink to="#">
        {{ $t('Publier votre annonce') }}
      </NuxtLink>
    </v-btn>
  </div>
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
