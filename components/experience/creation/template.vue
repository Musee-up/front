<template>
  <v-container
    class="justify-center"
    style="padding-right: 5%; padding-left: 5%"
  >
    <v-row class="mt-4 justify-space-between">
      <div>
        <v-btn rounded @click.prevent="createExperience"> 
          $t('common.add')
        </v-btn>
        <v-chip>
          $t('components.experience.creation.template.incomplete')
        </v-chip>
      </div>
      <v-btn rounded color="red" class="white--text">
        $t('common.delete')
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
      <experience-creation-slide-group />
    </div>

    <v-divider class="my-9"></v-divider>

    <v-row>
      <v-col cols="8">
        <experience-creation-attributes
          :att="model_att"
          @update="updateAttribute"
        />

        <v-divider class="my-9"></v-divider>

        <v-row class="d-flex flex-row">
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

        <v-divider class="my-9"></v-divider>

        <experience-guide-profile />
      </v-col>

      <v-col>
        <v-row class="justify-end">
          <experience-creation-price-picker>
          </experience-creation-price-picker>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import singleUserQuery from '@/graphql/queries/user'
import createExperience from '@/graphql/mutations/createExperience'
import updateExperience from '@/graphql/mutations/updateExperience'

export default {
//  props: ['experience', 'currentId'],
  props: {
    experience: {
      type: Object,
      default: () => ({
      }),
    },
    currentId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      model: {
        title: null,
        description: null,
      },
      att: [],
      model_att: [],
    }
  },
  mounted() {
    this.id = this.currentId

    if (!this.$props.experience) return
    this.model = this.$props.experience.data.attributes
    let { languages, themes, types } = this.model
    this.model_att = { languages, themes, types }
    ;[languages, themes, types] = Object.values(this.model_att).map((a) =>
      a?.data.map((x) => x.id)
    )

    this.model_att = { languages, themes, types }
    this.att = this.model_att
  },
  methods: {
    getUser() {
      return this.$apollo.query({
        query: singleUserQuery,
        variables: {
          id: this.$strapi.user.id,
        },
      })
    },
    updateAttribute(att) {
      this.att = att
      delete this.att.people
    },
    getMutationQuery() {
      return this.id ? updateExperience : createExperience
    },
    async createExperience() {
      const user = await this.getUser()
      const guide = user.data.me.guide

      const mutation = this.getMutationQuery()
      const exp = await this.$apollo.mutate({
        mutation,
        variables: {
          id: this.id,
          input: {
            ...this.att,
            guide: guide.data.id,
            title: this.model.title,
            description: this.model.description,
            duration: '00:03:00.000',
          },
        },
      })
      console.log(exp)
      this.id =
        exp.data[this.id ? 'updateExperience' : 'createExperience'].data.id
    },
  },
}
</script>
