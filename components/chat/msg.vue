<template>
  <v-sheet :class="msg.from === 'me' ? 'msg--from' : 'msg--to'" rounded>
    <div>
      {{ msg.content }}
    </div>
  </v-sheet>
</template>

<script>
export default {
  props: ['msg'],
}
</script>

<style lang="scss" scoped>
.msg {
  @extend .pa-4;
  color: $white !important;
  width: min-content;
  &--from {
    @extend .msg;
    background-color: $black;
  }
  &--to {
    @extend .msg;
    background-color: $_blue;
  }
}
</style>
