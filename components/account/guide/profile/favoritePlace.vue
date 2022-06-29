<template>
  <v-container>
    <v-row>
      <h2>
        {{ $t(title.label) }}
      </h2>
    </v-row>
    <v-row>
      <v-col cols="2">
        <experience-creation-photo-input class="ma-2" />
      </v-col>

      <v-col cols="7">
        <v-row>
          <v-text-field
            v-model="title.model"
            :label="$t(title.label)"
            @change="onChange"
          >
          </v-text-field>
        </v-row>
        <v-row>
          <v-textarea
            v-model="description.model"
            :label="$t(description.label)"
            @change="onChange"
          ></v-textarea>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['favoritePlace'],
  data() {
    return {
      title: {
        label: 'components.account.guide.profile.favoritePlace',
        model: this.favoritePlace.title,
      },
      description: {
        label: 'components.account.guide.profile.description',
        model: this.favoritePlace.description,
      },
      picture: {
        model: this.favoritePlace.picture,
      },
    }
  },
  methods: {
    onChange() {
      const input = {
        title: this.title.model,
        description: this.description.model,
        // picture
      }
      this.$emit('input', input)
    },
  },
}
</script>
