<template>
  <v-container>
    <v-row>

      <v-col>
        <v-row v-for="(friend, i) in friends" :key="i" class="username d-flex justify-center">
          <p class="text-center ma-4">{{friend.attributes.username}}</p>
          <v-btn class="input text-center ma-4" @click="(id = friend.id)"> chat </v-btn>
        </v-row>
      </v-col>

      <v-col v-if="id">
        <chat :id="id"></chat>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      id: null
    }
  },
  computed: {
    ...mapGetters({
      friends: 'user/getFriends',
    }),
  },
}
</script>

<style lang="scss" scoped>

.username {
  align-self: center;
}

.input {
  position: absolute;
  bottom: 0;
}

</style>
