<template>
  <v-row justify="center" class="ma-0 team-header py-16 align-center">
    <v-col sm="4">
      <v-row>
        <h2 class="white--text my-8">
          {{ $t('pages.about.heritage.title') }}
        </h2>
      </v-row>

      <v-row>
        <p class="white--text pa-4">
          {{ $t('pages.about.heritage.description') }}
        </p>
      </v-row>

      <v-row>
        <v-col>
          <v-btn rounded color="error">
            {{ $t('pages.about.heritage.buttons.details') }}
          </v-btn>
        </v-col>

        <v-col>
          <v-btn rounded color="primary">
            {{ $t('pages.about.heritage.buttons.list') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col sm="4">
      <nuxt-img src="/about_demo_mobile.png"></nuxt-img>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
* {
  text-align: center;
}

.team-header {
  position: relative;
  > * {
    position: relative;
  }
}

.team-header::before {
  content: ' ';
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background-image: url('@/static/about/demo.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
