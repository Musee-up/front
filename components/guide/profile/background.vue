<template v-if="guide">
  <div>
    <h2>{{ title }}</h2>
    <v-list>
      <v-list-item v-for="(item, i) in guide.background" :key="i">
        {{ item }}
      </v-list-item>
    </v-list>
  </div>
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
