<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-row>
          <account-guide-dashboard-profile :user="user">
          </account-guide-dashboard-profile>
        </v-row>
        <v-row class="text-center">
          <p>
            {{ $t('pages.account.client.headline') }}
          </p>
        </v-row>

        <v-row>
          <v-col v-for="(item, i) in cards" :key="i" cols="12" md="6">
            <nuxt-link :to="item.link">
              <v-card class="rounded-xl">
                <v-card-title>
                  <v-row>
                    <v-col>
                      <h4>
                        {{ $t(item.title) }}
                      </h4>
                    </v-col>

                    <v-col cols="2">
                      <v-icon color="primary">
                        {{ item.icon }}
                      </v-icon>
                    </v-col>
                  </v-row>
                </v-card-title>

                <v-card-text>
                  {{ $t(item.text) }}
                </v-card-text>
              </v-card>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'account-client',
  data() {
    return {
      cards: [
        {
          title: 'pages.account.client.info',
          icon: 'mdi-account',
          text: 'pages.account.client.cards.info',
          link: '/account/client/info',
        },
        {
          title: 'pages.account.client.booking',
          icon: 'mdi-calendar',
          text: 'pages.account.client.cards.bookings',
          link: '/account/client/bookings',
        },
        {
          title: 'pages.account.client.favorites',
          icon: 'mdi-heart',
          text: 'pages.account.client.cards.favorites',
          link: '/account/client/favorites',
        },
        {
          title: 'pages.account.client.help',
          icon: 'mdi-information',
          text: 'pages.account.client.cards.help',
          link: '/contact',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getCore',
    }),
  },
}
</script>
