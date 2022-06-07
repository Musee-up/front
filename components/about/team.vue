<template>
  <v-container>
    <v-row justify="center">
      <h2 class="primary-text">
        {{ $t('pages.about.team.title') }}
      </h2>
    </v-row>
    <v-row justify="center">
      <p style="width: 70%">
        {{ $t('pages.about.team.description') }}
      </p>
    </v-row>

    <v-row class="pa-16">
      <v-col
        v-for="(member, index) in $t('pages.about.team.members')"
        :key="index"
        class="ma-4"
      >
        <v-row>
          <v-col v-if="members[index].photo">
            <nuxt-img
              width="200"
              height="200"
              :src="members[index].photo"
            ></nuxt-img>
          </v-col>

          <v-col>
            <v-row>
              <h3 class="primary-text">
                {{ member.name }}
              </h3>
            </v-row>
            <v-row>
              <p class="primary--text">
                {{ member.title }}
              </p>
            </v-row>
            <v-row>
              <p class="primary--text">
                {{ member.description }}
              </p>
            </v-row>
            <v-row v-if="members[index]">
              <v-col v-for="(link, icon) in members[index].social" :key="icon">
                <nuxt-link :to="link">
                  <v-icon color="primary"> mdi-{{ icon }} </v-icon>
                </nuxt-link>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      members: {
        alexandre: {
          photo: '/about/team/alex.png',
          social: {
            facebook: 'https://www.facebook.com/',
            twitter: 'https://twitter.com/',
            linkedin: 'https://www.linkedin.com/in/',
            instagram: 'https://www.instagram.com/',
          },
        },
        lucile: {
          photo: '/about/team/lucile.png',
          social: {
            facebook: 'https://www.facebook.com/',
            twitter: 'https://twitter.com/',
            linkedin: 'https://www.linkedin.com/in/',
            instagram: 'https://www.instagram.com/',
          },
        },
        jean: {
          photo: '/about/team/jean.png',
          social: {
            facebook: 'https://www.facebook.com/',
            twitter: 'https://twitter.com/',
            linkedin: 'https://www.linkedin.com/in/',
            instagram: 'https://www.instagram.com/',
          },
        },
      },
    }
  },
}
</script>
