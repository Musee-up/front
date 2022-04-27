<template>
  <v-row>
    <v-list dense>
      <v-list-item-group>
        <v-list-item v-for="(item, i) in props.attributes" :key="i">
          <v-list-item-icon>
            <v-icon color="primary" v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content color="primary">
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-row>
</template>

<script setup>
const props = defineProps({
  attributes: {
    type: Array,
    default: null
  }
})

</script>
