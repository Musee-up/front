<template>
  <v-app-bar app style="background: white">
    <v-container
      fluid
      cols="8"
      class="d-flex justify-space-between header-navbar"
    >
      <v-spacer></v-spacer>

      <v-col>
        <NuxtLink
          tag="img"
          color="blue"
          style="height: 3em"
          :src="require('@/static/logo_musee_up.svg')"
          to="/"
        >
        </NuxtLink>
      </v-col>

      <v-col>
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
      </v-col>

      <v-col v-for="link in links" :key="link.title">
        <NuxtLink :to="link.link"> {{ link.title }}</NuxtLink>
      </v-col>

      <home-login-dropdown></home-login-dropdown>

      <v-spacer></v-spacer>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HomeFooter extends Vue {
  private experiences: Array<Object> = [
    { link: '#', text: this.$t('Expérience partagées') },
    { link: '#', text: this.$t('Expérience privées') },
    { link: '#', text: this.$t("Expérience Musée up'") },
  ]

  private links: Array<Object> = [
    {
      link: '/experiences',
      title: this.$t('Votre expérience sur mesure'),
    },
    { link: '/guides', title: this.$t('Nos guides') },
    { link: '#', title: this.$t('Notre Application') },
    { link: '#', title: this.$t('Blog') },
  ]

  private account: Array<Object> = [{ link: '#', text: this.$t("M'inscrire?") }]
}
</script>

<style scoped lang="scss">
.header-navbar {
  align-items: center;
  text-align-last: center;
}

.v-app-bar * {
  font-weight: bold;
  color: $_blue !important;
}
</style>
