<template>
  <div>
    {{ $route.params.id }}
    <v-container>
      <v-row>
        <div v-for="(msg, i) in msgs" :key="i">
          {{msg.from}} : {{msg.content}}
        </div>
      </v-row>
      <v-row>
        <v-text-field v-model="input"></v-text-field>
        <v-btn class="blue white--text" rounded @click="sendMsg"> Envoyer </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      msgs:[]
    }
  },
  mounted () {
    this.$mysocket.connect()
    this.$mysocket.socket.on('private message', ({content, _}) => {
      this.msgs.push({content, from:'friend'})
    })
  },
  methods: {
    sendMsg() {
      const m  = {
        from: this.$strapi.user.id,
        content: this.input
      }
      this.$mysocket.socket.emit('private message', m)
      this.msgs.push(m)
    }
  }
  // apollo: {
  //  friend: {
  //    query: experienceQuery,
  //    variables() {
  //      return { id: parseInt(this.$route.params.id) }
  //    },
  //  }
  // }
}
</script>
