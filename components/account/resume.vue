<template>
  <v-card class="rounded-xl" rounded outlined>
    <v-card-text class="pa-4">
      <div v-for="(item, i) in first" :key="i">
        <v-row class="justify-space-between d-flex">
          <v-col cols="3" class="ma-0 mx-2 label">{{ $t(item.label) }}</v-col>
          <v-col>
            <v-divider vertical />
          </v-col>
          <v-col class="ma-0 mx-2">{{ $t(item.value) }}</v-col>
        </v-row>
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
          label: 'Nom',
          value: 'Levebvre',
        },
        {
          label: 'Prénom',
          value: 'Marion',
        },
        {
          label: 'Date de naissance',
          value: '',
        },
        {
          label: 'Addresse mail',
          value: 'marion.lefebvre75@gmail.com',
        },
        {
          label: 'Addresse Postale',
          value: '72 Boulevard Vincent Auriol, 75013 Paris',
        },
        {
          label: 'Téléphone',
          value: '+33 6 76 98 76 12',
        },

        {
          label: 'Mot de passe',
          value: '',
        },
      ],
    }
  },
}
</script>
