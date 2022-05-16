<template>
  <div>
    <h1 style="color:black">{{friends}}</h1>
    <v-list>
      <v-list-item v-for="(friend, i) in friends" :key="i">
        <nuxt-link :to="`/chat/${parseInt(friend.id)}`">
          <base-blue-button :text="$t('Chat')"> </base-blue-button>
        </nuxt-link>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      friends: 'user/getFriends'
    })
  },
}
</script>
