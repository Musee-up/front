<template>
  <v-card class="rounded-xl" rounded outlined>
    <v-card-text>
      <div v-for="(item, i) in first" :key="i">
        <div class="justify-space-between d-flex text-center">
          <p class="ma-0 mx-2">{{ $t(item.label) }}</p>
          <v-icon class="mx-2">{{ item.icon }}</v-icon>
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
          label: 'Préférence de versement',
          icon: 'mdi-credit-card-outline',
        },
        {
          label: 'Politique d’annulation',
          icon: 'mdi-cancel',
        },
        {
          label: 'Mes recommandations',
          icon: 'mdi-checkbox-marked-circle-plus-outline',
        },
        {
          label: 'Nous contacter',
          icon: 'mdi-chat-question',
        },
      ],
    }
  },
}
</script>
