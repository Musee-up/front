<template>
  <v-container v-if="guide" class="justify-center">
    <v-row class="my-8">
      <v-col cols="2" class="abstract mx-6">
        <!-- <v-row class="photo"> -->
        <!--   <like-overview :width="width" :photo="guide.photo"> </like-overview> -->
        <!-- </v-row> -->

        <v-row class="my-4">
          <account-guide-dashboard-summary> </account-guide-dashboard-summary>
        </v-row>

        <v-row class="my-4">
          <guide-profile-skills :guide="guide"> </guide-profile-skills>
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
            {{ guide.firstname }} {{ guide.lastname }}
          </h1>
        </v-row>

        <v-row>
          <h3 class="guideType primary--text">
            {{ guide.userType }}
          </h3>
          <!-- <rating color="primary" :rating="guide.rating"></rating> -->
        </v-row>

        <div v-for="(component, i) in components" :key="i" class="mt-4">
          <v-row>
            <component :is="component.view" v-bind="component.props">
            </component>
          </v-row>
          <v-row class="my-4">
            <v-divider></v-divider>
          </v-row>
        </div>
      </v-col>

      <v-col cols="2" class="actions">
        <v-row class="justify-center">
          <nuxt-link :to="`/experiences?guideID=${guideID}`">
            <base-blue-button>
              {{ $t('pages.guides.reserve') }}
            </base-blue-button>
          </nuxt-link>
        </v-row>
        <v-row class="justify-center">
          <base-blue-button>{{ $t('pages.guides.create') }}</base-blue-button>
        </v-row>
      </v-col>
    </v-row>

    <!-- ========================== -->
    <v-row justify="center">
      <v-col cols="10">
        <v-row class="ma-4">
          <v-divider></v-divider>
        </v-row>

        <v-row>
          <v-row justify="center" class="my-2 text-center">
            <h2>
              Les expériences de
              <span class="primary--text">
                {{ guide.firstname }}
              </span>
            </h2>
          </v-row>
          <experience-list-horizontal> </experience-list-horizontal>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      guideID: 'guide/getID',
      guide: 'guide/getCore',
    }),
    components() {
      if (!this.guide) return
      const val = this.guide
      return {
        description: {
          view: 'guide-profile-description',
          props: {
            guide: val,
          },
        },
        background: {
          view: 'guide-profile-background',
          props: { background: val.background },
        },
        review: {
          view: 'review',
        },
        // favoritePlace: {
        //   // view: 'guide-profile-favorite-place',
        //   props: { favoritePlace: val.favorite_place.data.attributes },
        // },
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
  mounted() {
    this.load(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      load: 'guide/loadProfile',
    }),
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
