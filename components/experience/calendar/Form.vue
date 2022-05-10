<template>
  <div class="text-center">
    <v-dialog v-model="menu" width="500">
      <template #activator="{ on, attrs }">
        <v-btn color="blue lighten-2" v-bind="attrs" v-on="on">
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          Ajout d’un créneau de visite partagée
        </v-card-title>
        <v-card-text>
          <v-container class="px-4">
            <v-row>
              <v-divider class="ma-2"></v-divider>
            </v-row>

            <v-row class="ma-2">
              <h4>CHOIX DE L'EXPÉRIENCE</h4>
            </v-row>

            <v-row class="ma-2">
              <v-select
                v-if="experiences"
                v-model="experience"
                required
                item-value="id"
                item-text="attributes.title"
                :items="experiences"> </v-select>
            </v-row>

            <v-row>
              <v-divider class="ma-2"></v-divider>
            </v-row>

            <v-row class="ma-2">
              <h4>CHOIX DE LA DATE</h4>
            </v-row>

            <v-row class="ma-2">
              <date-menu
                @date="(input) => (date = input)">
              </date-menu>
            </v-row>

            <v-row>
              <v-divider class="ma-2"></v-divider>
            </v-row>

            <v-row class="ma-2">
              <h4>CHOIX DU CRÉNEAU</h4>
            </v-row>

            <v-row class="ma-2">
              <time-picker
                @time="(input) => (time = input)">
                ></time-picker>
            </v-row>

            <v-row>
              <v-divider class="ma-2"></v-divider>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn
            rounded
            class="white--text blue"
            @click.prevent="formValide">
            Valider
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import createSlot from '@/graphql/mutations/createExperienceSlot'

export default {
  data() {
    return {
      experience: null,
      date: null,
      time: null,
      menu: false,
    }
  },
  computed: {
    ...mapState(['guide']),
    ...mapGetters({
      experiences: 'guide/getExperiences'
    })
  },
  methods: {
    async formValide() {
      const rawStart = new Date([this.date, this.time].join(' '))
      const end = new Date(rawStart)
      end.setHours(rawStart.getHours() + 1)

       await this.$apollo.mutate({
        mutation: createSlot,
        variables: {
          input: {
            guide: this.guide.guide.data.id.toString(),
            experience: this.experience,
            start: rawStart.toISOString(),
            end: end.toISOString(),
          },
        },
      })

      this.menu = false
    }
  }
}
</script>

