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
          label: 'components.account.guide.resume.lastname',
          value: 'Levebvre',
        },
        {
          label: 'components.account.guide.resume.firstname',
          value: 'Marion',
        },
        {
          label: 'Date de naissance',
          value: '',
        },
        {
          label: 'components.account.guide.resume.mail',
          value: 'marion.lefebvre75@gmail.com',
        },
        {
          label: 'components.account.guide.resume.address',
          value: '72 Boulevard Vincent Auriol, 75013 Paris',
        },
        {
          label: 'components.account.guide.resume.phone',
          value: '+33 6 76 98 76 12',
        },

        {
          label: 'components.account.guide.resume.password',
          value: '',
        },
      ],
    }
  },
}
</script>
