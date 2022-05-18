<template>
  <v-container fluid class="pa-16 justify-center">
    <v-row class="fill-height">
      <v-container fluid>
        <v-row
          v-for="(msg, i) in msgs"
          :key="i"
          :class="
          msg.from === 'me' ? 'container--from' : 'container--to'
          "
          rounded
          >
          <chat-msg :msg="msg"></chat-msg>
        </v-row>
      </v-container>
    </v-row>

    <v-row>
      <v-text-field v-model="input"></v-text-field>
      <v-btn class="blue white--text" rounded @click="sendMsg"> Envoyer </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: ['id'],
  data() {
    return {
      input: '',
      msgs: [],
    }
  },
  computed: {
    ...mapGetters({
      getFriend: 'user/getFriend',
    }),
    friend() {
      return this.getFriend(this.id)
    },
  },
  mounted() {
    this.$mysocket.connect()

    this.$mysocket.socket.on('private message', ({ content, _ }) => {
      this.msgs.push({ content, from: 'friend' })
    })
  },
  methods: {
    ...mapMutations({
      setSocketId: 'user/updateSocketID',
    }),
    sendMsg() {
      const m = {
        content: this.input,
        from: 'me',
      }
      this.$mysocket.socket.emit('private message', m)
      this.msgs.push(m)
    },
  },
}
</script>

<style lang="scss" scoped>

.container {
  @extend .ma-2;

  &--to {
    justify-content: right;
  }

  &--from {
    justify-content: left;
  }
}

</style>
