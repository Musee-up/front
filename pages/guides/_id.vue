<template>
  <v-container class="guideProfileContainer">
    <v-row>
      <v-col cols="2" class="detail">
        <v-row class="photo">
          <like-overview :photo="guide.photo"> </like-overview>
        </v-row>

        <v-row class="my-4">
          <account-dashboard-summary></account-dashboard-summary>
        </v-row>

        <v-row class="my-4">
          <guide-profile-skills :guide="guide"> </guide-profile-skills>
        </v-row>
      </v-col>

      <v-col> </v-col>

      <v-col cols="8" class="summary">
        <v-row class="location">
          <guide-location :guide="guide" class="location-value">
          </guide-location>
        </v-row>

        <v-row>
          <h1 class="name black--text">
            {{ guide.firstname }} {{ guide.lastname }}
          </h1>
        </v-row>

        <v-row>
          <h2 class="guideType black--text">{{ guide.userType }}</h2>
          <rating :rating="guide.rating"></rating>
        </v-row>

        <v-row>
          <guide-profile-description :guide="guide" class="my-4">
          </guide-profile-description>
        </v-row>

        <v-row>
          <v-divider class="ma-4"></v-divider>
        </v-row>

        <v-row>
          <guide-profile-background :guide="guide"> </guide-profile-background>
        </v-row>

        <v-row>
          <v-divider></v-divider>
        </v-row>

        <v-row class="ma-4">
          <review></review>
        </v-row>
      </v-col>

      <v-col cols="1" class="actions">
        <base-blue-button text="test"> </base-blue-button>
      </v-col>
    </v-row>

    <v-row justify="center">
      <!-- ========================== -->
      <v-col cols="10">
        <v-row class="ma-4">
          <v-divider></v-divider>
        </v-row>

        <v-row>
          <v-row justify="center" class="my-2 text-center">
            <h2>
              Les expériences de
              <span class="blue--text">{{ guide.firstname }}</span>
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
</style>
