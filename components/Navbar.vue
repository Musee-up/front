<template>
  <v-app-bar
    center
    dark
    >
    <v-spacer />
      <ul>
        <li v-for="link in links" :key="link.id">
          <NuxtLink to="`link.link`"> {{ link.title }}</NuxtLink>
        </li>
      </ul>
      <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  data: () => {
    return {
      links: [
        {ling:"#", title:"exp" },
        {ling:"#", title:"mesure"},
        {ling:"#", title:"about"},
        {ling:"#", title:"blog"},
      ]
    }
  }
}

</script>

<style>
:root {
  --primary-color: #00c58e;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
  Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

a {
  color: white;
  text-decoration: none;
}
nav a:hover {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

main {
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 1rem;
  max-width: 1280px;
  text-align: center;
}

img {
  margin-bottom: 1rem;
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
  font-size: 1.2rem;
}

nav {
  padding: 0 1rem;
}
</style>

