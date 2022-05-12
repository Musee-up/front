<template>
  <div>
    <v-list>
      <v-list-item v-for="(friend, i) in friends" :key="i">
        {{ friend.attributes.username}}
        <nuxt-link :to="`/chat/${parseInt(friend.id)}`">
          <base-blue-button :text="$t('Chat')">
          </base-blue-button>
        </nuxt-link>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import singleUserQuery from '@/graphql/queries/user'
export default {
  data () {
    return {
      friends: []
    }
  },
  async mounted() {

    try {
      const user = await this.$apollo.query({
        query: singleUserQuery,
        variables: {
          id: this.$strapi.user.id,
        },
      })
      console.log(user)
      this.friends = user.data.me.friends.data
    } catch (e) {
      console.log(e)
    }

  }
}
</script>
