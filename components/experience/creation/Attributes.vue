<template>
  <v-row>
    <v-list dense>
      <v-list-item-group>
        <v-slide-item>
          <v-select
            v-model="selectedThemes"
            flat
            solo
            multiple
            prepend-icon="mdi-camera"
            :label="$t('Choisissez le type de l\'experience parmi la liste')"
            :items="types"
            ></v-select>
        </v-slide-item>

        <v-slide-item>
          <v-select
            v-model="selectedThemes"
            flat
            solo
            multiple
            prepend-icon="mdi-palette"
            :label="$t('Choisissez 3 thèmes maximum parmi la liste')"
            :items="themes"
            ></v-select>
        </v-slide-item>

        <v-slide-item>
          <v-select
            v-model="selectedLanguages"
            flat
            solo
            multiple
            prepend-icon="mdi-earth"
            :label="$t('Indiquez les langues displonibles')"
            :items="languages"
            ></v-select>
        </v-slide-item>

        <v-slide-item>
          <experience-creation-time-picker>

          </experience-creation-time-picker>
        </v-slide-item>

        <v-slide-item>
          <v-select
            v-model="selectedNumberPeople"
            flat
            solo
            prepend-icon="mdi-account-group"
            :label="$t('Indiquez le nombre de personne maximum')"
            :items="peopleNumber"
            ></v-select>
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
import languagesQuery from '@/graphql/queries/languages'
import themesQuery from '@/graphql/queries/themes'
import typesQuery from '@/graphql/queries/types'

export default {
  data() {
    return {
      selectedLanguages: [],
      selectedThemes: [],
      selectedNumberPeople: [],
      peopleNumber: [...Array(5).keys()]
    }
  },
  apollo: {
    languages: {
      query: languagesQuery,
      update(data) {
        return data.languages.data.map((x) => x.attributes.value)
      },
    },
    types: {
      query: typesQuery,
      update(data) {
        return data.experienceTypes.data.map((x) => x.attributes.name)
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
