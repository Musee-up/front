<template>
  <v-container>
    <v-row
      justify="center"
      class="px-sm-16 pt-16">
      <v-col
        v-for="(member, index) in $t('pages.about.team.members')"
        :key="index"
        sm="4"
        class="px-sm-16"
      >
        <v-row
          justify="center"
          :class="$vuetify.breakpoint.lgAndDown ? 'd-flex flex-column' : ''"
        >
          <v-col v-if="members[index].photo">
            <nuxt-img
              width="200"
              height="200"
              :src="members[index].photo"
            ></nuxt-img>
          </v-col>

          <v-col>
            <v-row>
              <h3>
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

<style lang="scss" scoped>
.row {
    justify-content: center;
}
* {
  text-align: center;
}
</style>
