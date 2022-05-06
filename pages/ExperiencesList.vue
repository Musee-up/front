<template>
  <ExperienceList :query="experiencesQuery" />
</template>

<script setup lang="ts">
import experiencesQuery from '@/graphql/queries/experiences'
</script>

<style scoped>
.v-main {
  background: url('@/static/home_bg.svg');
  background-size: cover;
}
</style>
