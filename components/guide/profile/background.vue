<template v-if="guide">
  <v-container class="pa-0">
    <h2>{{ title }}</h2>
    <v-list>
      <v-list-item v-for="(item, i) in guide.background" :key="i">
        <p>{{ item }}</p>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  props: ['guide'],
  data() {
    return {
      title: 'Son parcours et ses spécialités',
    }
  },
}
</script>
