<template>
  <div class="wrapper mx-auto">
    <nuxt-img :width="width" :height="height" class="profile" :src="photo">
    </nuxt-img>

    <div class="overlay">
      <slot></slot>
      <v-btn fab icon class="likeButton ml-9">
        <v-icon class="likeIcon" large>mdi-heart</v-icon>
      </v-btn>
    </div>
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

.overlay {
  > * {
    @extend .mx-1;
    color: $white;
  }
  left: 20px;
  bottom: 25px;
  position: absolute;
}
</style>
