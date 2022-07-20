<template>
  <div class="text-center">
    <v-dialog v-model="menu" width="500">
      <template #activator="{ on, attrs }">
        <v-btn color="primary white--text" v-bind="attrs" v-on="on">
          {{ $t('components.experience.calendar.form.button') }}
        </v-btn>
      </template>

      <v-card>
        <v-card-title></v-card-title>
        <v-card-text>
          <v-container class="px-4">
            <v-row>
              <v-divider class="ma-2"></v-divider>
            </v-row>

            <v-row class="ma-2">
              <h4>
                {{ $t('components.experience.calendar.form.title') }}
              </h4>
            </v-row>

            <v-row class="ma-2">
              <v-select
                v-if="experiences"
                v-model="experience"
                required
                item-value="id"
                item-text="attributes.title"
                :items="experiences"
              >
              </v-select>
            </v-row>

            <v-row>
              <v-divider class="ma-2"></v-divider>
            </v-row>

            <v-row class="ma-2">
              <h4>
                {{ $t('components.experience.calendar.form.date_input') }}
              </h4>
            </v-row>

            <v-row class="ma-2">
              <date-menu @date="(input) => (date = input)"> </date-menu>
            </v-row>

            <v-row>
              <v-divider class="ma-2"></v-divider>
            </v-row>

            <v-row class="ma-2">
              <h4>
                {{ $t('components.experience.calendar.form.slot_input') }}
              </h4>
            </v-row>

            <v-row class="ma-2">
              <time-picker @time="(input) => (time = input)"> ></time-picker>
            </v-row>

            <v-row>
              <v-divider class="ma-2"></v-divider>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn rounded class="white--text blue" @click.prevent="formValide">
            {{ $t('components.experience.calendar.form.validate') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import createSlot from '@/graphql/mutations/experience/slot/create'

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
    ...mapGetters({
      experiences: 'guide/getExperiences',
      id: 'guide/getID',
    }),
  },
  methods: {
    formValide() {
      const rawStart = new Date([this.date, this.time].join(' '))
      const end = new Date(rawStart)
      end.setHours(rawStart.getHours() + 1)

      this.$apollo
        .mutate({
          mutation: createSlot,
          variables: {
            input: {
              guide: this.id,
              experience: this.experience,
              start: rawStart.toISOString(),
              end: end.toISOString(),
            },
          },
        })
        .catch((error) => {
          console.log('createslot', error)
          console.log(error)
        })

      this.menu = false
    },
  },
}
</script>
