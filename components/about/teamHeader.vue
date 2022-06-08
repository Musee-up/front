<template>
  <v-container class="team-header" fluid>

    <v-row justify="center my-8">
      <h2 class="black-text">
        {{ $t('pages.about.team.title') }}
      </h2>
    </v-row>

    <v-row justify="center">
      <p style="width: 70%" class="font-weight-bold primary--text">
        {{ $t('pages.about.team.description') }}
      </p>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">

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
  opacity: 0.4;
  background: url('@/static/about/team_header.png');
  background-repeat: no-repeat;
  background-size: cover;
}


</style>
