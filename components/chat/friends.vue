<template>
  <v-container  class="ma-8">
    <v-row>
      <v-col cols="3">

        <v-row>
          <h2>Amis</h2>
        </v-row>

        <v-row>
          <v-divider></v-divider>
        </v-row>

        <v-row
          v-for="(friend, i) in friends"
          :key="i"
          class="username"
          >

          <v-col>
            <v-row>
              <v-col>
                <v-avatar color="primary" size="56">
                  <nuxt-img src="/portrait.png"> </nuxt-img>
                </v-avatar>
              </v-col>

              <v-col>
                <p class="text-center ma-4">
                  {{ friend.attributes.username }}
                </p>
              </v-col>

              <v-col class="justify-center align-self-center">
                <v-btn rounded outlined class="primary white--text" @click="id = friend.id">
                  chat
                </v-btn>
              </v-col>
            </v-row>


            <v-row class="my-4">
              <v-divider></v-divider>
            </v-row>

          </v-col>

        </v-row>
        <v-row class="justify-self-center justify-center">
          <base-blue-button class="addFriend">
            Ajouter un ami
          </base-blue-button>
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
  data() {
    return {
      id: null,
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
.addFriend {
  width:50%;
}

.username {
  align-self: center;
}

.input {
  position: absolute;
  bottom: 0;
}
</style>
