<template>
  <v-app-bar flat center app style="background: black">
    <v-spacer />
    <NuxtLink style="height: inherit; width: inherit" to="#">
      <nuxt-img fit="cover" src="/logo_musee_up.svg" />
    </NuxtLink>
    <v-menu pa-0 ma-0 offset-y>
      <template #activator="{ on, attrs }">
        <v-btn
          style="background-color: transparent"
          elevation="0"
          v-bind="attrs"
          v-on="on"
        >
          {{ $t('Trouver une expérience') }}
          <v-icon color="grey"> mdi-chevron-down </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in experiences" :key="index">
          <NuxtLink to="#"> {{ item.text }} </NuxtLink>
        </v-list-item>
      </v-list>
    </v-menu>

    <ul>
      <li v-for="link in links" :key="link.title">
        <NuxtLink :to="link.link"> {{ link.title }}</NuxtLink>
      </li>
    </ul>
    <div>
      <v-menu pa-0 ma-0 offset-y>
        <template #activator="{ on, attrs }">
          <v-btn
            style="background-color: transparent"
            elevation="0"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon> mdi-account-circle </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <RegisterForm />
          </v-list-item>
          <v-list-item v-for="(item, index) in account" :key="index">
            <NuxtLink to="#"> {{ item.text }} </NuxtLink>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn class="rounded-lg blue-filled" background="blue">
        <NuxtLink to="#"> {{ $t('Publier votre annonce') }} </NuxtLink>
      </v-btn>
    </div>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        { link: '#', text: this.$t('Expérience partagées') },
        { link: '#', text: this.$t('Expérience privées') },
        { link: '#', text: this.$t("Expérience Musée up'") },
      ],
      links: [
        {
          link: '/experienceslist',
          title: this.$t('Votre expérience sur mesure'),
        },
        { link: '#', title: this.$t('Qui sommes nous?') },
        { link: '#', title: this.$t('Blog') },
      ],
      account: [{ link: '#', text: this.$t("M'inscrire?") }],
    }
  },
  methods: {
    change_color() {
      // this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>
