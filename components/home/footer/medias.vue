<template>
  <v-col cols="2">
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

    <v-row class="d-flex">
      <v-icon class="px-2" color="blue--text"> mdi-facebook </v-icon>
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
