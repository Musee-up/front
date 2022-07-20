<template>
  <v-menu
    v-model="selectedOpen"
    :close-on-content-click="false"
    :activator="selectedElement"
    offset-x
  >
    <v-card color="grey lighten-4" min-width="350px" flat>
      <v-toolbar :color="selectedEvent.color" dark>
        <v-toolbar-title v-if="slot">
          {{ slot }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click.prevent="deleteSlot">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-select
          v-if="experiences"
          item-text="title"
          item-value="id"
          :items="experiences"
          @change="associateExperience"
        ></v-select>
      </v-toolbar>
      <v-card-actions>
        <v-btn text color="secondary" @click="selectedOpen = false">
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import deleteSlot from '@/graphql/mutations/Experience/slot/delete'
import updateslot from '@/graphql/mutations/experience/slot/update'
import slotQuery from '@/graphql/queries/slot'
import Slot from '@/types/Slot'

export default {
  props: ['selectedEvent', 'open', 'selectedElement'],
  data() {
    return {
      slot: null,
      selectedOpen: this.open,
    }
  },
  computed: {
    ...mapGetters({
      experiences: 'guide/getExperiences',
    }),
  },
  apollo: {
    slot: {
      query: slotQuery,
      variables() {
        return {
          id: this.selectedEvent.id.toString(),
        }
      },
      update(data) {
        const slot = Slot.map(data.slot)
        return slot.experience?.title || 'No experience'
      },
    },
  },
  methods: {
    findExp(id) {
      return this.experiences.find((x) => x.id === id)
    },
    associateExperience(id) {
      this.$apollo
        .mutate({
          mutation: updateslot,
          variables: {
            id: this.selectedEvent.id.toString(),
            input: {
              experience: id.toString(),
            },
          },
        })
        .then(() => this.$emit('update', this.findExp(id)))
        .catch(console.error)
    },
    deleteSlot() {
      this.$apollo
        .mutate({
          mutation: deleteSlot,
          variables: {
            id: this.selectedEvent.id.toString(),
          },
        })
        .then(() => this.$emit('remove', this.selectedEvent.id))
    },
  },
}
</script>
