<template v-if="guide">
  <v-row>
    <v-list
      v-for="(item, i) in guide.background"
      :key="i">
      <v-list-item>
        item

      </v-list-item>
    </v-list>
  </v-row>
</template>

<script>
export default {
  props: ['guide']
}
</script>
