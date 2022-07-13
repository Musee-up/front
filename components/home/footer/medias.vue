<template>
  <v-col md="2" cols="12">
    <NuxtLink
      tag="img"
      style="height: 3em"
      :src="require('@/static/logo_blue.png')"
      to="/"
      >
    </NuxtLink>

    <v-row class="description--text pa-4">
      {{ $t('vous rapproche de la culture.') }}
    </v-row>

    <v-row>
      <v-col
        v-for="(item, i) in medias"
        :key="i"
        class="pa-0"
        cols="1"
        >
        <nuxt-link :to="item.link">
          <v-icon class="px-md-2" color="blue--text">
            {{ item.icon }}
          </v-icon>

        </nuxt-link>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      medias: [
        {
          title: 'Facebook',
          link: 'https://www.facebook.com/',
          icon: 'mdi-facebook',
        },
        {
          title: 'Instagram',
          link: 'https://www.instagram.com/',
          icon: 'mdi-instagram',
        },
        {
          title: 'Twitter',
          link: 'https://twitter.com/',
          icon: 'mdi-twitter',
        },
        {
          title: 'LinkedIn',
          link: 'https://www.linkedin.com/',
          icon: 'mdi-linkedin',
        },
        {
          title: 'Youtube',
          link: 'https://www.youtube.com/',
          icon: 'mdi-youtube',
        },
      ],
    }
  },
}
</script>
