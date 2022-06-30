<template>
  <v-col cols="2" class="actions">
    <v-row class="justify-center">
      <nuxt-link :to="`/experiences?guideID=${id}`">
        <base-blue-button>
          {{ $t('pages.guides.reserve') }}
        </base-blue-button>
      </nuxt-link>
    </v-row>
    <v-row class="justify-center">
      <base-blue-button>{{ $t('pages.guides.create') }}</base-blue-button>
    </v-row>
  </v-col>
</template>

<script setup lang="ts">
const { id } = defineProps<{
  guideId: string
}>()
</script>
