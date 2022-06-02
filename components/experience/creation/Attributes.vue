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
              :label="$t(item.label)"
              :items="item.items"
              @change="emit"
            ></v-select>
          </v-slide-item>

          <v-checkbox
            v-model="handifriendly.model"
            :label="
              $t(handifriendly.model ? 'Handifriendly' : 'Pas handifriendly')
            "
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
  props: ['att'],
  data() {
    return {
      handifriendly: {
        model: false,
        icon: 'mdi-human-wheelchair',
      },
      attributes: {
        people: {
          model: [],
          items: [...Array(5).keys()],
          icon: 'mdi-account-group',
          label: 'components.experience.creation.attributes.groupSize',
        },
        themes: {
          model: [],
          items: [],
          icon: 'mdi-palette',
          label: 'components.experience.creation.attributes.themes',
        },
        languages: {
          model: [],
          items: [],
          icon: 'mdi-earth',
          label: 'components.experience.creation.attributes.languages',
        },
        types: {
          model: [],
          items: [],
          icon: 'mdi-camera',
          label: 'components.experience.creation.attributes.types',
        },
      },
    }
  },
  watch: {
    att() {
      Object.entries(this.$props.att).forEach(
        ([k, v]) => (this.attributes[k].model = v)
      )
    },
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
