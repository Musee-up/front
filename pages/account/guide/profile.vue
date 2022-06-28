<template>
  <v-container class="justify-center">
    <v-row class="my-8">
      <v-col cols="2" class="abstract mx-6">
        <v-row class="photo">
          <!-- <like-overview :width="width" :photo="guide.photo"> </like-overview> -->
        </v-row>

        <v-row class="my-4">
          <account-guide-dashboard-summary> </account-guide-dashboard-summary>
        </v-row>

        <v-row class="my-4">
          <account-guide-profile-skills
            v-if="core"
            :guide="core" @input="onInput">
          </account-guide-profile-skills>

          <!-- </account-guide-profile-skills> -->
          <!-- <guide-profile-skills :guide="{}"> </guide-profile-skills> -->
        </v-row>
      </v-col>

      <v-col cols="7" class="summary">
        <!-- <v-row class="location"> -->
          <!-- <guide-location -->
          <!--   color="description" -->
          <!--   :guide="guide" -->
          <!--   class="location-value" -->
          <!-- > -->
          <!-- </guide-location> -->
        <!-- </v-row> -->

        <v-row>
          <h1 class="name primary--text">
            {{ user.firstname }} {{ user.lastname }}
          </h1>
        </v-row>

        <!-- <v-row> -->
          <!-- <h3 class="guideType primary--text"> -->
          <!--   {{ guide.userType }} -->
          <!-- </h3> -->
          <!-- <rating color="primary" :rating="guide.rating"></rating> -->
        <!-- </v-row> -->

        <v-row class="my-4">
          {{ core }}
          <account-guide-profile-description
            v-if="core"
            :guide="core"
            @input="onInput">
          </account-guide-profile-description>
          <!-- <guide-profile-description :guide="guide"> -->
          <!-- </guide-profile-description> -->
        </v-row>

        <v-row class="my-4">
          <v-divider></v-divider>
        </v-row>

        <v-row class="my-4">
          <account-guide-profile-background
            v-if="core"
            :value="core.background"
            @input="onInput">
          </account-guide-profile-background>
          <!-- <guide-profile-background :guide="guide"> </guide-profile-background> -->
        </v-row>
      </v-col>
    </v-row>

    <v-row class="my-4">
      <v-divider></v-divider>
    </v-row>

    <v-row v-if="core">
      {{ core.favorite_place}}
      <account-guide-profile-favorite-place
        :favorite-place="core.favorite_place"
        @input="onFavoritePlace">
      </account-guide-profile-favorite-place>
    </v-row>


  </v-container>
</template>

<script>
import { mapState, mapGetters , mapActions } from 'vuex'

export default {
  layout: 'account-guide',
  computed: {
    ...mapState(['guide']),
    ...mapGetters({
      user: 'user/getCore',
    }),
    core() {
      return this.guide.guide?.attributes
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
  ...mapActions({updateGuide: 'guide/updateGuide'}),
  ...mapActions({updateFavoritePlace: 'guide/updateFavoritePlace'}),
    onFavoritePlace(input) {
      const id = this.guide.guide.attributes.favorite_place.data.id
      console.log(id, input)
      this.updateFavoritePlace({
        id,
        input
      })
    },
    onInput(input) {
      console.log(input)
      this.updateGuide({
        id: this.guide.guide.id,
        input
      })
    }
  },
}
</script><style lang="css" scoped>
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
