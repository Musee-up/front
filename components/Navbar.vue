<template>
  <v-app-bar flat center app style="background: transparent">
    <v-spacer />
    <NuxtLink
      tag="img"
      style="height: inherit; width: inherit"
      :src="require('assets/logo_musee_up.svg')"
      to="#"
    >
    </NuxtLink>
    <v-menu pa-0 ma-0 offset-y>
      <template #activator="{ on, attrs }">
        <v-btn
          style="background-color: transparent"
          elevation="0"
          v-bind="attrs"
          v-on="on"
        >
          Trouver une expérience
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
        <NuxtLink to="`link.link`"> {{ link.title }}</NuxtLink>
      </li>
    </ul>
    <div>
      <NuxtLink to="#">
        <v-icon color="white"> mdi-account-circle </v-icon>
        Se connecter
      </NuxtLink>
      <v-btn class="rounded-lg" style="background-color: #064888">
        <NuxtLink to="#"> Publier votre annonce </NuxtLink>
      </v-btn>
    </div>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  data: () => {
    return {
      experiences: [
        { link: '#', text: 'Expérience partagées' },
        { link: '#', text: 'Expérience privées' },
        { link: '#', text: "Expérience Musée up'" },
      ],
      links: [
        { link: '#', title: 'Votre expérience sur mesure' },
        { link: '#', title: 'Qui sommes nous?' },
        { link: '#', title: 'Blog' },
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

* {
  text-transform: none !important;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: white !important;
}

#app {
  font-family: 'Roboto', sans-serif;
}

a {
  text-decoration: none;
}

nav a:hover {
  text-decoration: none;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
}

nav {
  padding: 0 1rem;
}
</style>
