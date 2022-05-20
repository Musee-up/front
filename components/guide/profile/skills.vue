<template v-if="guide">
  <v-card class="rounded-xl" rounded outlined>
    <v-card-text>
      <div v-for="(item, i) in first" :key="i">
        <div class="justify-space-between d-flex text-center">
          <h2 class="ma-0 mx-2">{{ $t(item.label) }}</h2>
          <v-icon class="mx-2">{{ item.icon }}</v-icon>
        </div>

        <v-list class="list">
          <v-list-item
            v-for="(text, i) in item.list"
            :key="i">
            <v-list-item-title class="list-item">
              <p> {{text}} </p>
            </v-list-item-title>
          </v-list-item>

        </v-list>

        <v-divider v-if="i != first.length - 1" class="ma-4"></v-divider>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['guide'],
  data() {
    return {
      first: [
        {
          label: 'Formation et expérience',
          list: this.guide.workExperience,
          icon: 'mdi-school'
        },
        {
          label: 'SES SPÉCIALITÉS',
          list: this.guide.specialties,
          icon: 'mdi-pillar'
        },
        {
          label: 'SES LANGUES',
          list: this.guide.languages,
          icon: 'mdi-earth'
        },       
        {
          label: 'CE QU’ELLE AIME',
          list: this.guide.interests,
          icon: 'mdi-cards-heart-outline'
        },

      ],
    }
  },
}
</script>

<style lang="css" scoped>
.v-list-item {
  min-height: 32px;
}
</style>
