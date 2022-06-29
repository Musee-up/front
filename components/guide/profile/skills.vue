<template v-if="guide">
  <v-card class="rounded-xl" rounded outlined>
    <v-card-text>
      <div v-for="(item, i) in first" :key="i">
        <div class="justify-space-between d-flex text-center">
          <h3 class="ma-0 mx-2">{{ $t(item.label) }}</h3>
          <v-icon color="primary" class="mx-2">{{ item.icon }}</v-icon>
        </div>

        <v-list class="list">
          <v-list-item v-for="(text, y) in item.list" :key="y">
            <v-list-item-title class="list-item">
              <p class="skill-item">{{ text }}</p>
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
  layout: 'account-guide',
  props: ['guide'],
  data() {
    return {
      first: [
        {
          label: 'components.guide.abstract.workExperiences',
          list: this.guide?.workExperiences,
          icon: 'mdi-school',
        },
        {
          label: 'components.guide.abstract.specialties',
          list: this.guide?.specialties,
          icon: 'mdi-pillar',
        },
        {
          label: 'components.guide.abstract.languages',
          list: this.guide?.languages,
          icon: 'mdi-earth',
        },
        {
          label: 'components.guide.abstract.interests',
          list: this.guide?.interests,
          icon: 'mdi-cards-heart-outline',
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

.skill-item {
  white-space: normal;
}
</style>
