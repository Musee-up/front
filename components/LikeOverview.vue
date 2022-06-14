<template>
  <div class="wrapper mx-auto">
    <nuxt-img :width="width" :height="height" class="profile" :src="photo">
    </nuxt-img>

    <v-row class="ma-0 overlay d-flex">
      <slot></slot>
    </v-row>
    <v-btn fab icon class="likeButton">
      <v-icon
        :dense="$vuetify.breakpoint.lgAndDown"
        :large="$vuetify.breakpoint.mdAndUp"
        color="white"
        class="likeIcon"
        >mdi-heart</v-icon
      >
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
    },
    width: {
      type: Number,
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: max-content;
  position: relative;
}

.likeButton {
  right: 17px;
  bottom: 25px;
  position: absolute;
}

.overlay {
  > * {
    color: $white;
  }
  left: 20px;
  bottom: 35px;
  position: absolute;
}
</style>
