<template>
  <v-slide-group show-arrows multiple>
    <v-slide-item class="rounded-xl">
      <nuxt-img
        class="ma-2 photo"
        :width="width"
        :height="height"
        :src="photos[0].src"
      />
    </v-slide-item>
    <div class="ma-2 py-2 d-flex justify-space-between flex-column">
      <v-slide-item>
        <nuxt-img
          class="rounded-xl photo"
          :width="width"
          :height="height / 2 - 10"
          :src="photos[1].src"
        />
      </v-slide-item>
      <v-slide-item>
        <nuxt-img
          class="rounded-xl photo"
          :width="width"
          :height="height / 2 - 10"
          :src="photos[2].src"
        />
      </v-slide-item>
    </div>

    <v-slide-item>
      <nuxt-img
        :width="width"
        :height="height"
        class="ma-2 rounded-xl photo"
        :src="photos[3].src"
      />
    </v-slide-item>
    <v-slide-item>
      <nuxt-img
        :width="width"
        class="ma-2 rounded-xl photo"
        :src="photos[4].src"
        :height="height"
      />
    </v-slide-item>
  </v-slide-group>
</template>

<script setup lang="ts">
// const props = defineProps({
//  photos: {
//    type: Object,
//    default: null,
//  },
// })
// const props = {
//   height: {
//     type: Number,
//     default: null,
//   },
// }

const photos = [
  {
    src: '/exp_photo.png',
  },
  {
    src: '/exp_photo.png',
  },
  {
    src: '/exp_photo.png',
  },
  {
    src: '/exp_photo.png',
  },
  {
    src: '/exp_photo.png',
  },
]

const width = 371
const height = 300
</script>
