<template>
  <v-slide-group show-arrows>
    <v-slide-item>
      <v-img
        class="ma-2 rounded-xl"
        :src="'http://localhost:1337' + props.photos.data[0].attributes.url"
      />
    </v-slide-item>
    <v-slide-item>
      <v-col class="d-flex align-content-space-between flex-wrap">
        <v-row>
          <v-img
            class="ma-2 rounded-xl"
            width="391"
            :src="'http://localhost:1337' + props.photos.data[1].attributes.url"
          />
        </v-row>
        <v-row>
          <v-img
            class="ma-2 mb-0 rounded-xl"
            width="391"
            :src="'http://localhost:1337' + props.photos.data[2].attributes.url"
          />
        </v-row>
      </v-col>
    </v-slide-item>
    <v-slide-item>
      <v-img
        class="ma-2 rounded-xl"
        :src="'http://localhost:1337' + props.photos.data[3].attributes.url"
      />
    </v-slide-item>
  </v-slide-group>
</template>

<script setup lang="ts">
const props = defineProps({
  photos: {
    type: Object,
    default: null,
  },
})
</script>
