<template>
  <div class="wrapper mx-auto">
    <nuxt-link :to="link">
      <nuxt-img
        :width="width"
        :height="height"
        class="profile rounded-xl"
        :src="photo"
      >
      </nuxt-img>
    </nuxt-link>

    <v-row class="ma-0 overlay d-flex">
      <slot></slot>
    </v-row>
    <v-btn fab icon class="likeButton" @click="action">
      <v-icon dense large :color="color" class="likeIcon">mdi-heart</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    action: {
      type: Function,
      required: true,
    },
    color: {
      type: String,
      default: 'white',
    },
    photo: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      default: 200,
    },
    width: {
      type: Number,
      default: 200,
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
  right: 15px;
  bottom: 15px;
  position: absolute;
  @include for-phone-only {
    right: 10px;
    bottom: 10px;
  }
}

.overlay {
  > * {
    color: $white;
  }
  left: 15px;
  bottom: 25px;
  position: absolute;
}
</style>
