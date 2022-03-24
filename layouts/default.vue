<template>
  <v-app dark :style="image">
    <Navbar/>
    <v-main fluid>
    <SearchBar/>
        
    </v-main>
    <v-footer
      app
      center
      flat
      style="background:transparent"
      >
      <h1>  ca c'est le footer ! </h1>
    </v-footer>
  </v-app>
</template>

<script>
import bg_path from "assets/joseph-barrientos-KV7n8nARXng-unsplash.jpeg";

export default {
  data () {
    return {
      image: {backgroundImage:`url(${bg_path})`}
    }
  }
}
</script>
