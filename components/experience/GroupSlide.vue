<template >
  <v-slide-group show-arrows multiple>
    <v-slide-item
      v-for="(photo, index) in photos"
      :key="index"
      >
      <nuxt-img
        :width="width"
        :src="url + getSrc(photo)"
        ></nuxt-img>
    </v-slide-item>
    <!-- <v-slide-item class="rounded-xl"> -->
    <!--   <nuxt-img -->
    <!--     class="ma-2" -->
    <!--     :width="width" -->
    <!--     :height="height" -->
    <!--     :src="photos[0].src" -->
    <!--   /> -->
    <!-- </v-slide-item> -->

    <!-- <div -->
    <!--   class="ma-2 py-2 d-flex justify-space-between flex-column" -->
    <!--   :style="`height:${height}px`" -->
    <!-- > -->
    <!--   <v-slide-item> -->
    <!--     <nuxt-img -->
    <!--       class="rounded-xl photo" -->
    <!--       :width="width" -->
    <!--       :height="height / 2 - 10" -->
    <!--       :src="photos[1].src" -->
    <!--     /> -->
    <!--   </v-slide-item> -->
    <!--   <v-slide-item> -->
    <!--     <nuxt-img -->
    <!--       class="rounded-xl photo" -->
    <!--       :width="width" -->
    <!--       :height="height / 2 - 10" -->
    <!--       :src="photos[2].src" -->
    <!--     /> -->
    <!--   </v-slide-item> -->
    <!-- </div> -->

    <!-- <v-slide-item> -->
    <!--   <nuxt-img -->
    <!--     :width="width" -->
    <!--     :height="height" -->
    <!--     class="ma-2 rounded-xl photo" -->
    <!--     :src="photos[3].src" -->
    <!--   /> -->
    <!-- </v-slide-item> -->
    <!-- <v-slide-item> -->
    <!--   <nuxt-img -->
    <!--     :width="width" -->
    <!--     class="ma-2 rounded-xl photo" -->
    <!--     :src="photos[4].src" -->
    <!--     :height="height" -->
    <!--   /> -->
    <!-- </v-slide-item> -->
  </v-slide-group>
</template>

<script>
export default {
  props: ['photos'],
  data () {
    return {
    url: process.env.API_URL,
    }
  },
  computed: {
    width () {
      return {
        xs: 230,
        sm: 230,
        md: 429,
        lg: 429,
        xl: 429,
      }[this.$vuetify.breakpoint.name]
    },
  },
  methods: {
    getSrc(photo) {
      const formats = photo.formats
      console.log(photo)
      return {
        xs: formats.thumbnail,
        sm: formats.thumbnail,
        md: formats.large,
        lg: formats.large,
        xl: formats.large,
      }[this.$vuetify.breakpoint.name].url
    },
  },
}
</script>

