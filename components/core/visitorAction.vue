<template>
  <v-list class="rounded-xl">
    <v-list-item v-for="(item, i) in links" :key="i">
      <component :is="item.component">
      <p class="ma-0 font-weight-regular">
        {{ $t(item.label) }}
      </p>
      </component>
    </v-list-item>
  </v-list>
</template>

<script>
import links from '@/data/nav/visitor'
export default {
  data() {
    return {
      links: links.actions,
    }
  },
}
</script>
