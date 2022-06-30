<template v-if="user">
  <h1 class="name primary--text">{{ user.firstname }} {{ user.lastname }}</h1>
</template>

<script setup lang="ts">
const { user } = defineProps<{
  user: Object
}>()
</script>
