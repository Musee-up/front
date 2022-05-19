<template>
  <v-container class="guides-container">

    <v-row align="center" justify="center">
      <v-col
        v-for="(_, i) in iter"
        :key="i"
        cols="4"
        >
        <guide-list-item
          :guide="guide"
          class="guide"
          >

        </guide-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      iter: Array(15).keys(),
      guide:
      {
        name: "Héloise Doiteau",
        photo: '/portrait.png',
      },
    }
  }
}
</script>
