<template>
  <v-container
    class="justify-center"
    style="padding-right: 5%; padding-left: 5%"
  >
    <v-row class="mt-4 justify-space-between">
      <div>
        <v-btn
          rounded
          @click.prevent="createExperience">
          Ajouter
        </v-btn>
        <v-chip> Incomplète </v-chip>
      </div>
      <v-btn
        rounded
        color="red"
        class="white--text">
        Suprimer
      </v-btn>
    </v-row>
    <v-row class="justify-center">
      <v-col class="text-left">
        <v-text-field
          v-model="model.title"
          style="font-size: 27px"
          :label="
            $t(
              'Indiquez le titre de votre expérience (maximum 40 caractères espaces compris)'
            )
          "
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
            {{ $t("Présentation de l'experience") }}
          </h3>
        </v-row>
        <v-row>
          <v-textarea
            v-model="model.description"
            :label="
              $t(
                'Ecrivez-ici la présentation de votre expérience. (maximum 700 caractères espaces compris).'
              )
            "
          ></v-textarea>
        </v-row>

        <v-divider class="my-9"></v-divider>

        <experience-guide-profile />
      </v-col>

      <v-col>
        <v-row class="justify-end">
          <experience-creation-price-picker></experience-creation-price-picker>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['experience', 'mutationQuery', 'id'],
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
    this.model = this.$props.experience.data.attributes
    let { languages, themes, types } = this.model
    this.model_att = { languages, themes, types }

    ;[languages, themes, types] =
      Object.values(this.model_att).map((a) =>
      a?.data.map((x) => x.id)
    )

    this.model_att = { languages, themes, types }
    this.att = this.model_att
  },
  methods: {
    updateAttribute(att) {
      this.att = att
      delete this.att.people
    },
    createExperience() {
      return this.$apollo.mutate({
        mutation: this.$props.mutationQuery,
        variables: {
          id: this.id,
          input: {
            ...this.att,
            title: this.model.title,
            description: this.model.description,
            duration: '00:03:00.000',
          },
        },
      })
    },
  },
}
</script>
