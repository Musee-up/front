<template>
  <v-slide-group show-arrows="True" style="width: 1600px">
    <v-slide-item>
      <v-img
        class="ma-2 rounded-xl"
        width="585"
        height="500"
        :src="'http://localhost:1337' + photos.data[0].attributes.url"
      />
    </v-slide-item>
    <v-slide-item>
      <v-col class="d-flex align-content-space-between flex-wrap">
        <v-row>
          <v-img
            class="ma-2 rounded-xl"
            width="391"
            height="240"
            :src="'http://localhost:1337' + photos.data[1].attributes.url"
          />
        </v-row>
        <v-row>
          <v-img
            class="ma-2 rounded-xl"
            width="391"
            height="240"
            :src="'http://localhost:1337' + photos.data[2].attributes.url"
          />
        </v-row>
      </v-col>
    </v-slide-item>
    <v-slide-item>
      <v-img
        class="ma-2 rounded-xl"
        width="585"
        height="500"
        :src="'http://localhost:1337' + photos.data[3].attributes.url"
      />
    </v-slide-item>
  </v-slide-group>
</template>

<script setup>
const photos = defineProps({
  photos: Object,
})
</script>
