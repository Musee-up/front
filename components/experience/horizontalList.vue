<template>
  <v-container>
    <v-row >
      <v-col v-for="(_, i) in iter" :key="i" cols="4" class="pa-4">
        <v-card elevation="0" class="mx-auto rounded-xl ">
          <nuxt-link :to="`experiences/${id}`">
            <like-overview width="467" height="" :photo="experience.photo">
            </like-overview>
          </nuxt-link>

          <v-card-text class="d-flex flex-column justify-right">
            <h2 class="ml-2 my-1">{{ experience.title }}</h2>
            <div class="d-flex justify-space-between">
              <rating :rating="experience.rating"></rating>
              <p class="my-0">A partir de {{ experience.price }}€ par personne</p>
            </div>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  data () {
    return {
      id: 1,
      iter: [...Array(3).keys()],
      experience: {
        photo: "/exp_photo.png",
        title: "Les recoins de Montmartre",
        rating: {
          value: 4.8,
          length: 144
        },
        price: "18"
      }
    }
  }
}
</script>

<!-- <style lang="scss" scoped> -->
<!-- .title { -->

<!-- } -->
<!-- </style> -->
