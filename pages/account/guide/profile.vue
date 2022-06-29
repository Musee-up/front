<template>
  <v-container v-if="guide" class="justify-center">
    <v-row class="mt-4">
      <v-col cols="2" class="abstract mx-6">
        <v-row class="photo mb-4">
          <nuxt-img
            v-if="user.picture && user.picture.data"
            :src="url + user.picture.data.attributes.formats.thumbnail.url"
            class="rounded-xl"
          ></nuxt-img>
        </v-row>

        <v-row class="my-4">
          <account-guide-dashboard-summary> </account-guide-dashboard-summary>
        </v-row>

        <v-row class="my-4">
          <account-guide-profile-skills
            v-if="edit"
            :guide="guide"
            @input="onInput"
          >
          </account-guide-profile-skills>

          <guide-profile-skills v-else :guide="guide"> </guide-profile-skills>
        </v-row>
      </v-col>

      <v-col cols="7" class="summary">
        <v-row class="location">
          <guide-location
            color="description"
            :guide="guide"
            class="location-value"
          >
          </guide-location>
        </v-row>

        <v-row>
          <h1 class="name primary--text">
            {{ user.firstname }} {{ user.lastname }}
          </h1>
        </v-row>

        <div v-for="(component, i) in components" :key="i" class="mt-4">
          <v-row>
            <component
              :is="edit ? component.edit : component.view"
              v-bind="component.props"
              @input="onInput"
            >
            </component>
          </v-row>
          <v-row class="my-4">
            <v-divider></v-divider>
          </v-row>
        </div>
      </v-col>
      <v-col>
        <v-row>
          <v-btn color="primary" icon @click="edit = !edit">
            <v-icon color="primary">
              {{ edit ? 'mdi-check' : 'mdi-pencil' }}
            </v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'account-guide',
  data() {
    return {
      edit: false,
      url: process.env.API_URL,
    }
  },
  computed: {
    ...mapGetters({
      guideID: 'guide/getID',
      guide: 'guide/getCore',
      user: 'user/getCore',
    }),
    components() {
      if (!this.guide) return
      const val = this.guide
      return {
        description: {
          edit: 'account-guide-profile-description',
          view: 'guide-profile-description',
          props: {
            guide: val,
          },
        },
        background: {
          view: 'guide-profile-background',
          edit: 'account-guide-profile-background',
          props: { background: val.background },
        },
        favoritePlace: {
          // view: 'guide-profile-favorite-place',
          edit: 'account-guide-profile-favorite-place',
          props: { favoritePlace: val.favorite_place.data.attributes },
        },
      }
    },
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 140
        case 'sm':
          return 140
        case 'md':
          return 140
        case 'lg':
          return 200
        case 'xl':
          return 310
      }
      return 440
    },
  },
  methods: {
    ...mapActions({
      updateGuide: 'guide/updateGuide',
      updateFavoritePlace: 'guide/updateFavoritePlace',
    }),
    onFavoritePlace(input) {
      const id = this.guide.attributes.favorite_place.data.id
      this.updateFavoritePlace({
        id,
        input,
      })
    },
    onInput(input) {
      this.updateGuide({
        id: this.guideID,
        input,
      })
    },
  },
}
</script>
<style lang="css" scoped>
.abstract > * > * {
  width: 100% !important;
}

.location-value {
  font-size: x-small;
}

.actions > * > * {
  width: 100% !important;
}
</style>
