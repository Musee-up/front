<template>
  <v-container fluid class="pa-16 justify-center">
    <v-row class="fill-height">
      <v-container fluid>
        <div
          v-for="(msg, i) in msgs"
            :key="i" 
          :class="msg.from === 'me' ? 'pa-4 container_from': 'pa-4 container_to'"
          rounded>
          <v-card
            style="max-width:max-content"
            >
          <v-card-text
            rounded :class="msg.from === 'me' ? 'pa-4 msg_from' : 'pa-4 msg_to'" >
            <div>
            {{ msg.content }}
            </div>
          </v-card-text>
        </v-card>
        </div>
      </v-container>
    </v-row>

    <v-row>
      <v-text-field v-model="input"></v-text-field>
      <v-btn class="blue white--text" rounded @click="sendMsg">
        Envoyer
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      input: '',
      msgs: [],
    }
  },
  computed:{
    ...mapGetters({
      getFriend: 'user/getFriend'
    }),
    friend () {
      return this.getFriend(this.$router.id)
    }
  },
  mounted() {
    this.$mysocket.connect()

    this.$mysocket.socket.on('private message', ({ content, _ }) => {
      this.msgs.push({ content, from: 'friend' })
    })
  },
  methods: {
    ...mapMutations({
      setSocketId: 'user/updateSocketID'
    }),
    sendMsg() {
      const m = {
        content: this.input,
        from:'me'
      }
      this.$mysocket.socket.emit('private message', m)
      this.msgs.push(m)
    },
  },
}
</script>

<style lang="scss" scoped>

.msg_from {
  color: $white !important;
  background-color: $black;
}

.msg_to {
  color: $white !important;
  background-color: $_blue;
}
 
.container_to {
  justify-content: right;
}

.container_from {
  justify-content: left;
}
</style>
