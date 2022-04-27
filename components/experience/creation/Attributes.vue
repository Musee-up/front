<template>
  <v-row>
    <v-list dense>
      <v-list-item-group>
        <v-slide-item>
          <v-select
            label="Choisissez 3 thèmes maximum parmi la liste"
            :items="languages"></v-select>
        </v-slide-item>
        <v-slide-item>
          <v-select :items="themes"></v-select>
        </v-slide-item>
        <v-list-item v-for="(item, i) in []" :key="i">
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

<script>
import { languagesQuery, themesQuery } from '@/graphql/query'

export default {
  apollo: {
    languages: {
      query: languagesQuery,
      update(data) {
        return data.languages.data.map((x) => x.attributes.value)
      },
    },
    themes: {
      query: themesQuery,
      update(data) {
        return data.themes.data.map((x) => x.attributes.name)
      },
    },
  },
}
</script>
