<template>
  <v-menu
    v-model="selectedOpen"
    :close-on-content-click="false"
    :activator="selectedElement"
    offset-x
  >
    <v-card color="grey lighten-4" min-width="350px" flat>
      <v-toolbar :color="selectedEvent.color" dark>
        <v-toolbar-title v-if="experienceSlot">
          {{ experienceSlot }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click.prevent="deleteSlot">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-select
          v-if="experiences"
          item-text="attributes.title"
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
import deleteSlot from '@/graphql/mutations/deleteExperienceSlot'
import updateExperience from '@/graphql/mutations/updateExperience'
import experienceSlotQuery from '@/graphql/queries/ExperienceSlot'

export default {
  props: ['selectedEvent', 'open', 'selectedElement'],
  data() {
    return {
      experienceSlot: null,
      selectedOpen: this.open,
    }
  },
  computed: {
    ...mapGetters({
      experiences: 'guide/getExperiences',
    }),
  },
  apollo: {
    experienceSlot: {
      query: experienceSlotQuery,
      variables() {
        return {
          id: this.selectedEvent.id.toString(),
        }
      },
      update(data) {
        const exp =
          data.experienceSlot.data.attributes.experience.data?.attributes
            .title || 'tmp'
        return exp
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
          mutation: updateExperience,
          variables: {
            id: id.toString(),
            input: {
              experience_slots: [this.selectedEvent.id],
            },
          },
        })
        .then(() => this.$emit('update', this.findExp(id).attributes))
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
