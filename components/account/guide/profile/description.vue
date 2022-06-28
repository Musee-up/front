<template>
  <v-container>
    <v-row>
      <v-text-field
        v-model="headline.model"
        :label="$t(headline.label)"
        @change="onChange"
        ></v-text-field>
    </v-row>

    <v-row>
      <v-textarea
        v-model="description.model"
        :label="$t(description.label)"
        @change="onChange"
        ></v-textarea>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['guide'],
  data() {
    return {
      headline: {
        label: 'components.account.guide.profile.headline',
        model: this.guide?.headline
      },
      description:{
        label: 'components.account.guide.profile.description',
        model: this.guide?.description
      }
    }
  },
  methods: {
    onChange() {
      const input = {
        headline: this.headline.model,
        description: this.description.model,
      }
      this.$emit('input', input)
    }
  },
}
</script>
