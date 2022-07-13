<template>
  <div>
    <v-list nav dense class="actions my-4">
      <v-list-item v-for="(item, i) in account" :key="i" class="action">
        <v-list-item-icon>
          <nuxt-link :to="item.link">
            <v-icon color="primary">
              {{ item.icon }}
            </v-icon>
          </nuxt-link>
        </v-list-item-icon>

        <v-list-item-title>
          <nuxt-link :to="item.link">
            {{ $t(item.label) }}
          </nuxt-link>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import links from '@/data/nav/guide'
export default {
  data() {
    return {
      account: links,
    }
  },
}
</script>
