<template v-if="guide">
  <v-card
    elevation="0"
    class="mx-auto rounded-xl justify-center text-center">

    <div class="wrapper mx-auto">
      <nuxt-img class="profile" :src="guide.photo">
      </nuxt-img>
      <v-btn fab icon class="icon">
        <v-icon large color="white">mdi-heart</v-icon>
      </v-btn>
    </div>

    <v-card-text class="justify-center">
      {{guide.name}}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props:['guide']
}
</script>

<style lang="scss" scoped>
.wrapper {
  width:max-content;
  position: relative;
}

.icon {
  position: absolute;
  bottom: 36px;
  right: 36px;
}

.image{
  height:100%
}
</style>
