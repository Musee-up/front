<template>
  <div class="wrapper mx-auto">
    <nuxt-img :width="width" :height="height" class="profile" :src="photo">
    </nuxt-img>

    <div class="overlay d-flex">
      <slot></slot>
    </div>
    <v-btn fab icon class="likeButton ml-9">
      <v-icon color="white" class="likeIcon" large>mdi-heart</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ['photo', 'height', 'width'],
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
  bottom: 25px;
  position: absolute;
}
</style>
