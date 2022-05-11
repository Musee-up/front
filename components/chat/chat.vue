<template>
  <div>
    <p> this is a chat</p>
    <v-btn @click="clickButton"></v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    clickButton () {
      this.$mysocket.connect()
      this.$mysocket.socket.emit('test')
    }
  }
  // mounted() {
  //  this.socket = this.$nuxtSocket({
  //    channel: '/index',
  //  })
  // }
}
</script>
