<template>
  <v-card class="rounded-xl" rounded outlined>
    <v-card-text>
      <div v-for="(item, i) in first" :key="i">
        <div class="justify-space-between d-flex text-center">
          <p class="ma-0 mx-2">{{ $t(item.label) }}</p>
          <v-icon color="item.color" class="mx-2">{{ item.icon }}</v-icon>
        </div>
        <v-divider v-if="i != first.length - 1" class="ma-4"></v-divider>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      first: [
        {
          label: '354 avis et commentaires',
          icon: 'mdi-star',
          color: 'yellow',
        },
        {
          label: 'Projets et diplomes vérifié',
          icon: 'mdi-school',
        },
        {
          label: '24 expériences disponibles',
          icon: 'mdi-map',
        },
      ],
    }
  },
}
</script>
