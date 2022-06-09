<template>
  <v-container>

    <v-row>
      <v-col cols="12" class="text-center">
        <h2 class="primary--text">
          {{ $t('components.contact.faq.title') }}
        </h2>
      </v-col>

    </v-row>

    <v-row
      v-for="(item, i) in iter"
      :key="i"
      class="my-2">
      <v-treeview
        class="rounded-xl primary white--text question"
        :items="items"></v-treeview>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      iter: [...Array(6).keys()],
      items: [
        {
          name: 'Pourquoi réserver des expériences culturelles avec Musée Up’ ?',
          children: [
            { name: 'Webstorm : app' },
          ],
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

.question {
  width:100%
}

</style>
