<template>
  <v-container class="justify-center">
    <v-row class="my-8">
      <v-col cols="2" class="detail mx-12">
        <v-row class="photo">
          <like-overview :photo="guide.photo"> </like-overview>
        </v-row>

        <v-row class="my-4">
          <account-guide-dashboard-summary> </account-guide-dashboard-summary>
        </v-row>

        <v-row class="my-4">
          <guide-profile-skills :guide="guide"> </guide-profile-skills>
        </v-row>
      </v-col>

      <v-col cols="8" class="summary">
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
          <rating color="primary" :rating="guide.rating"></rating>
        </v-row>

        <v-row class="my-4">
          <guide-profile-description :guide="guide">
          </guide-profile-description>
        </v-row>

        <v-row class="my-4">
          <v-divider></v-divider>
        </v-row>

        <v-row class="my-4">
          <guide-profile-background :guide="guide"> </guide-profile-background>
        </v-row>

        <v-row class="my-4">
          <v-divider></v-divider>
        </v-row>

        <v-row class="my-4">
          <review></review>
        </v-row>
      </v-col>

      <v-col cols="1" class="actions">
        <v-row class="justify-center">
          <nuxt-link :to="`/experiences?guideID=${guide.id}`">
            <base-blue-button>{{
              $t('pages.guides.reserve')
            }}</base-blue-button>
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
          <experience-horizontal-list> </experience-horizontal-list>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      guide: {
        id: '1',
        headline: 'Jeune guide-conférencière diplômée de l’Ecole du Louvre',
        description: `Bonjour, je m’appelle Héloïse et je serais peut-être votre prochaine guide pour une merveilleuse expérience culturelle avec Musée Up’ !

Diplômée en littérature de l’Université de Paris et de l’école du Louvre en médiation culturelle, cela fait bientôt 3 ans que j’exerce le métier de guide-conférencière en Île-de-France. 

Je suis passionnée par l’histoire de l’art, la littérature française du XIXe siècle ainsi que par la médiation et le partage, notamment avec les enfants. 

Bonjour, je m’appelle Héloïse et je serais peut-être votre prochaine guide pour une merveilleuse expérience culturelle avec Musée Up’ !

Diplômée en littérature de l’Université de Paris et de l’école du Louvre en médiation culturelle, cela fait bientôt 3 ans que j’exerce le métier de guide-conférencière en Île-de-France. 

Je suis passionnée par l’histoire de l’art, la littérature française du XIXe siècle ainsi que par la médiation et le partage, notamment avec les enfants. 

Je suis passionnée par l’histoire de l’art, la littérature française du XIXe siècle ainsi que par la médiation et le partage, notamment avec les enfants. 
`,
        background: [
          'Depuis 2018 : Guide-conférencier des musées nationaux',
          '2017-2018',
          '2016-2017',
          '2014-2015',
          '2012-2014',
        ],
        userType: 'Guide Conférencière',
        firstname: 'Héloise',
        lastname: 'Doiteau',
        rating: {
          length: 356,
          value: 4.8,
        },
        location: 'Île-de-France',
        workExperience: [
          'Master de l’Ecole du Louvre en médiation culturelle',
          'Master de Littérature de l’Université Paris Diderot',
          'Guide conférencier national',
        ],
        specialties: ['Art', 'Histoire', 'Cinéma'],
        languages: ['Français', 'Anglais', 'Allemand'],
        interests: ['Se balader dans Paris', 'Les enfants', 'Les chats'],
        photo: '/portrait.png',
      },
    }
  },
}
</script>

<style lang="css" scoped>
.detail > * > * {
  width: 100% !important;
}

.location-value {
  font-size: x-small;
}

.actions > * > * {
  width: 100% !important;
}
</style>
