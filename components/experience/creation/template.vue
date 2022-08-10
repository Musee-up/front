<template>
  <v-container
    class="justify-center"
    style="padding-right: 5%; padding-left: 5%"
  >
    <v-row class="mt-4 justify-space-between">
      <div>
        <v-btn rounded @click.prevent="createExperience">
          {{ $t('common.add') }}
        </v-btn>
        <v-chip>
          {{ $t('components.experience.creation.template.incomplete') }}
        </v-chip>
      </div>
      <v-btn rounded color="error" class="white--text">
        {{ $t('common.delete') }}
      </v-btn>
    </v-row>
    <v-row class="justify-center">
      <v-col class="text-left">
        <v-text-field
          v-model="model.title"
          style="font-size: 27px"
          :label="$t('components.experience.creation.template.title')"
        >
        </v-text-field>
      </v-col>
    </v-row>

    <div style="height: 500px">
      <experience-creation-slide-group @upload="onUpload">
      </experience-creation-slide-group>
    </div>

    <v-divider class="my-9"></v-divider>

    <v-row>
      <v-col cols="12" md="6">
        <experience-creation-attributes
          :att="model_att"
          @update="updateAttribute"
        >
        </experience-creation-attributes>

        <v-divider class="my-9"></v-divider>

        <v-row>
          <h3 class="black--text py-4">
            {{
              $t('components.experience.creation.template.description.title')
            }}
          </h3>
        </v-row>
        <v-row>
          <v-textarea
            v-model="model.description"
            :label="
              $t('components.experience.creation.template.description.input')
            "
          ></v-textarea>
        </v-row>

        <!-- <v-divider class="my-9"></v-divider> -->

        <!-- <experience-guide-profile /> -->
      </v-col>

      <v-col>
        <experience-creation-price-picker
          v-if="model.amountPerAge"
          v-model="model"
        >
        </experience-creation-price-picker>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import createExperience from '@/graphql/mutations/experience/create'
import updateExperience from '@/graphql/mutations/experience/update'
import Experience from '@/types/Experience'

export default {
  props: {
    experience: {
      type: Experience,
      required: true,
    },
    currentId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      model: {
        photos: [],
        title: null,
        description: null,
      },
      att: [],
      model_att: [],
    }
  },
  computed: {
    cols() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return { right: 3, middle: 8 }
        case 'sm':
          return { right: 3, middle: 8 }
        case 'md':
          return { right: 3, middle: 8 }
        case 'lg':
          return { right: 3, middle: 8 }
        case 'xl':
          return { right: 2, middle: 9 }
      }
      return { right: 3, middle: 8 }
    },
    ...mapGetters({
      guideID: 'guide/getID',
    }),
  },
  mounted() {
    this.id = this.currentId

    console.log('template:', this.experience)
    if (!this.experience) return
    this.model = this.experience
    let { languages, themes, types } = this.model
    this.model_att = { languages, themes, types }
    ;[languages, themes, types] = Object.values(this.model_att).map((a) =>
      a?.map((x) => x.id)
    )

    this.model_att = { languages, themes, types }
    this.att = this.model_att
  },
  methods: {
    ...mapActions({
      load: 'guide/load',
    }),
    onUpload(data) {
      this.model.photos = data
    },
    updateAttribute(att) {
      this.att = att
      delete this.att.people
    },
    getMutationQuery() {
      return this.id ? updateExperience : createExperience
    },
    createExperience() {
      const mutation = this.getMutationQuery()
      delete this.model.photos
      delete this.model.slots
      delete this.model.id
      console.log(this.model)
      this.$apollo
        .mutate({
          mutation,
          variables: {
            id: this.id,
            input: {
              ...this.att,
              ...this.model,
              guide: this.guideID,
              duration: '00:03:00.000',
            },
          },
        })
        .then((exp) => {
          if (this.id) return
          const id = exp.data.createExperience.data.id
          this.$router.push(`/account/experiences/${id}`)
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
