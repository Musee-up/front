<template v-if="guide">
  <v-card elevation="0" class="mx-auto rounded-xl justify-center text-center">

    <div class="wrapper mx-auto">
      <nuxt-img class="profile" :src="guide.photo"> </nuxt-img>

      <div class="overlay">
        <div class="location d-flex align-center">
          <v-icon class="locationIcon">mdi-map-marker</v-icon>
          <h2 class="locationAdress my-0">{{ guide.location }}</h2>
          <v-btn fab icon class="likeButton ml-9">
            <v-icon class="likeIcon" large>mdi-heart</v-icon>
          </v-btn>
        </div>
      </div>

    </div>

    <v-card-text class="d-flex flex-column justify-center">
      <h3 class="name"> {{ guide.name }} </h3>
      <div class="rating-container d-flex justify-center text-center">
        <v-icon class="star white--text">mdi-star</v-icon>
        <p class="rating my-0">{{ guide.rating }}/5 ({{ guide.ratingNbr }} avis)</p>
      </div>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  props: ['guide'],
}
</script>

<style lang="scss" scoped>
$name: #63686E;

.location {
  > * {
    color: $white;
  }
}
.wrapper {
  width: max-content;
  position: relative;
}

.rating-container {
  > * {
    @extend .mx-1;
  }
}

.overlay {
  > * {
    @extend .mx-1;
  }
  left: 20px;
  bottom: 25px;
  position: absolute;
}

//.likeButton {
//  @extend 
//
//}

.likeIcon {
  color: $white;
}

.image {
  height: 100%;
}
</style>
