<template>
  <div class="wrapper mx-auto">
    <nuxt-img class="profile" :src="guide.photo"> </nuxt-img>

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
  props: ['guide'],
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
    color:$white;
  }
  left: 20px;
  bottom: 25px;
  position: absolute;
}

</style>
