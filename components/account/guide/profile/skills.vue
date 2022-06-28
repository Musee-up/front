<template>
  <v-card class="rounded-xl" rounded outlined>
    <v-card-text>
      <div v-for="(item, i) in skills" :key="i">
        <div class="justify-space-between d-flex text-center">
          <h3 class="ma-0 mx-2">{{ $t(item.label) }}</h3>
          <v-icon color="primary" class="mx-2">{{ item.icon }}</v-icon>
        </div>

        <v-combobox
          v-model="item.value"
          multiple
          chips
          @change="onChange"
        ></v-combobox>
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
      skills: {
        workExperiences: {
          label: 'components.guide.abstract.workExperiences',
          icon: 'mdi-school',
          value: this.guide.workExperiences,
        },
        specialties: {
          label: 'components.guide.abstract.specialties',
          icon: 'mdi-pillar',
          value: this.guide.specialties,
        },
        languages: {
          label: 'components.guide.abstract.languages',
          icon: 'mdi-earth',
          value: this.guide.languages,
        },
        interests: {
          label: 'components.guide.abstract.interests',
          icon: 'mdi-cards-heart-outline',
          value: this.guide.interests,
        },
      },
    }
  },
  methods: {
    onChange() {
      const input = {
        workExperiences: this.skills.workExperiences.value,
        specialties: this.skills.specialties.value,
        interests: this.skills.interests.value,
      }
      this.$emit('input', input)
    },
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
