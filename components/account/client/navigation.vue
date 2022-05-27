<template>
  <v-navigation-drawer
    permanent
    expand-on-hover

    >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          {{ $t('pages.account.client.navigation_profile')}}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list 
      nav
      dense
      class="actions">
      <v-list-item
        v-for="(item, i) in account"
        :key="i"
        class="action"
        >
        <v-list-item-icon>
          <nuxt-link :to="item.link">
            <v-icon color="primary">
              {{ item.icon }}
            </v-icon>
          </nuxt-link>
        </v-list-item-icon>

        <v-list-item-title>
          <nuxt-link :to="item.link">
            {{ $t(item.label)}}
          </nuxt-link>
        </v-list-item-title>

      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          {{ $t('pages.account.client.navigation_help')}}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list 
      nav
      dense
      class="actions">
      <v-list-item
        v-for="(item, i) in help"
        :key="i"
        class="action"
        >
        <v-list-item-icon>
          <nuxt-link :to="item.link">
            <v-icon color="primary">
              {{ item.icon }}
            </v-icon>
          </nuxt-link>
        </v-list-item-icon>

        <v-list-item-title>
          <nuxt-link :to="item.link">
            {{ $t(item.label)}}
          </nuxt-link>
        </v-list-item-title>

      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      account: [
        {
          icon: 'mdi-account',
          label: 'pages.account.client.info',
          link: '/account/client/info'
        },
        {
          icon: 'mdi-calendar',
          label: 'pages.account.client.reservations',
          link: ''
        },
        {
          icon: 'mdi-message',
          label: 'pages.account.client.messages',
          link: ''
        },
        {
          icon: 'mdi-heart',
          label: 'pages.account.client.favorites',
          link: ''
        },
        {
          icon: 'mdi-account-group',
          label: 'pages.account.client.friends',
          link: ''
        },
        {
          icon: 'mdi-credit-card',
          label: 'pages.account.client.payments',
          link: ''
        },
      ],
      help: [
        {
          icon: 'mdi-card-multiple',
          label: 'pages.account.client.general_conditions',
          link: ''
        },
        {
          icon: 'mdi-shield-check',
          label: 'pages.account.client.privacy',
          link: ''
        },
        {
          icon: 'mdi-information',
          label: 'pages.account.client.navigation_help2',
          link: ''
        }
      ]
    }
  }
}
</script>
