<template>
  <v-menu
    v-model="selectedOpen"
    :close-on-content-click="false"
    :activator="selectedElement"
    offset-x
    >
    <v-card
      color="grey lighten-4"
      min-width="350px"
      flat
      >
      <v-toolbar
        :color="selectedEvent.color"
        dark
        >
        <!-- <v-btn icon> -->
        <!--   <v-icon>mdi-pencil</v-icon> -->
        <!-- </v-btn> -->
        <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click.prevent="deleteSlot">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-select :items="experiences"></v-select>
        <!-- <v-btn icon> -->
        <!--   <v-icon>mdi-dots-vertical</v-icon> -->
        <!-- </v-btn> -->
      </v-toolbar>
      <!-- <v-card-text> -->
      <!--   <span v-html="selectedEvent.details"></span> -->
      <!-- </v-card-text> -->
      <v-card-actions>
        <v-btn
          text
          color="secondary"
          @click="selectedOpen = false"
          >
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import deleteSlot from '@/graphql/mutations/DeleteExperienceSlot'
export default {
  props: ["experiences", "selectedEvent", "open", "selectedElement"],
  data () {
    return {
      selectedOpen: this.open,
    }
  },
  methods: {
    deleteSlot() {
      this.$apollo.mutate({
        mutation: deleteSlot,
        variables: {
          id: this.selectedEvent.id.toString(),
        },
      }).then(() => this.$emit('delete', this.selectedEvent.id))
    }
  }
}
</script>
