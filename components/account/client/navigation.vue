<template>
  <v-navigation-drawer permanent expand-on-hover class="drawer">
    <v-list-item class="my-4">
      <v-list-item-content>
        <v-list-item-title>
          <h6 class="nav-title text-h6">
            {{ $t('pages.account.client.navigation_profile') }}
          </h6>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list nav dense class="actions my-4">
      <v-list-item v-for="(item, i) in account" :key="i" class="action">
        <v-list-item-icon>
          <nuxt-link :to="item.link">
            <v-icon color="primary">
              {{ item.icon }}
            </v-icon>
          </nuxt-link>
        </v-list-item-icon>

        <v-list-item-title>
          <nuxt-link :to="item.link">
            {{ $t(item.label) }}
          </nuxt-link>
        </v-list-item-title>
      </v-list-item>
    </v-list>

    <v-list-item class="my-4">
      <v-list-item-content>
        <v-list-item-title>
          <p class="nav-title text-h6" style="width: fit-content">
            {{ $t('pages.account.client.navigation_help') }}
          </p>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list nav dense class="actions my-4">
      <v-list-item v-for="(item, i) in help" :key="i" class="action">
        <v-list-item-icon>
          <nuxt-link :to="item.link">
            <v-icon color="primary">
              {{ item.icon }}
            </v-icon>
          </nuxt-link>
        </v-list-item-icon>

        <v-list-item-title>
          <nuxt-link :to="item.link">
            {{ $t(item.label) }}
          </nuxt-link>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      account: [
        {
          icon: 'mdi-account',
          label: 'pages.account.client.info',
          link: '/account/client/info',
        },
        {
          icon: 'mdi-calendar',
          label: 'pages.account.client.reservation',
          link: '/account/client/reservations',
        },
        {
          icon: 'mdi-message',
          label: 'pages.account.client.messages',
          link: '',
        },
        {
          icon: 'mdi-heart',
          label: 'pages.account.client.favorites',
          link: '',
        },
        {
          icon: 'mdi-account-group',
          label: 'pages.account.client.friends',
          link: '',
        },
        {
          icon: 'mdi-credit-card',
          label: 'pages.account.client.payments',
          link: '/account/client/payment',
        },
      ],
      help: [
        {
          icon: 'mdi-card-multiple',
          label: 'pages.account.client.general_conditions',
          link: '',
        },
        {
          icon: 'mdi-shield-check',
          label: 'pages.account.client.privacy',
          link: '',
        },
        {
          icon: 'mdi-information',
          label: 'pages.account.client.navigation_help2',
          link: '',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-title {
  border-bottom: 1px solid $_blue;
  width: max-content;
}
</style>
