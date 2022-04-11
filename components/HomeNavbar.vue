<template>
  <v-app-bar app class="" style="background: black">
    <v-row
      cols="8"
      class="d-flex justify-space-between"
      style="align-items: center"
    >
      <v-col>
        <NuxtLink
          tag="img"
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
    </v-row>
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
        { link: '#', title: this.$t('Nos guides') },
        { link: '#', title: this.$t('Notre Application') },
        { link: '#', title: this.$t('Blog') },
      ],
      account: [{ link: '#', text: this.$t("M'inscrire?") }],
    }
  },
}
</script>
