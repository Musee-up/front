<template>
  <v-row>
    <v-col>
      <v-list dense>
        <v-list-item-group>
          <v-slide-item v-for="(item, index) in attributes" :key="index">
            <v-select
              v-model="item.model"
              flat
              solo
              multiple
              :prepend-icon="item.icon"
              :label="item.label"
              :items="item.items"
              @change="emit"
            ></v-select>
          </v-slide-item>

          <v-checkbox
            v-model="handifriendly.model"
            :label="handifriendly.model ? 'Handifriendly' : 'Pas handifriendly'"
            :on-icon="handifriendly.icon"
            off-icon="mdi-walk"
            hide-details
          ></v-checkbox>

          <v-slide-item>
            <experience-creation-time-picker> </experience-creation-time-picker>
          </v-slide-item>
        </v-list-item-group>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import languagesQuery from '@/graphql/queries/languages'
import themesQuery from '@/graphql/queries/themes'
import typesQuery from '@/graphql/queries/types'

export default {
  data() {
    return {
      handifriendly: {
        model: false,
        icon: 'mdi-human-wheelchair',
      },
      attributes: {
        people: {
          model: [],
          icon: 'mdi-account-group',
          items: [...Array(5).keys()],
          label: this.$t('Indiquez le nombre de personne maximum'),
        },
        themes: {
          model: [],
          icon: 'mdi-palette',
          items: [],
          label: this.$t('Choisissez 3 thèmes maximum parmi la liste'),
        },
        languages: {
          model: [],
          icon: 'mdi-earth',
          items: [],
          label: this.$t('Choisissez 3 languages'),
        },
        types: {
          model: [],
          icon: 'mdi-camera',
          items: [],
          label: this.$t("Choisissez le type de l'experience parmi la liste"),
        },
      },
    }
  },
  methods: {
    emit() {
      const ret = []
      Object.entries(this.attributes).forEach(([k, v]) => {
        ret[k] = v.model
      })
      this.$emit('update', ret)
    },
  },
  apollo: {
    languages: {
      query: languagesQuery,
      update(data) {
        const l = data.languages.data.map((x) => ({
          value: x.id,
          text: x.attributes.value,
        }))
        this.attributes.languages.items = l
        return l
      },
    },
    types: {
      query: typesQuery,
      update(data) {
        const q = data.experienceTypes.data.map((x) => ({
          value: x.id,
          text: x.attributes.name,
        }))
        this.attributes.types.items = q
        return q
      },
    },
    themes: {
      query: themesQuery,
      update(data) {
        const t = data.themes.data.map((x) => ({
          value: x.id,
          text: x.attributes.name,
        }))
        this.attributes.themes.items = t
        return t
      },
    },
  },
}
</script>
