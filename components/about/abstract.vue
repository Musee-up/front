<template>
    <v-row class="primary">
      <v-spacer></v-spacer>

      <v-col>
        <v-row>
          <h1 class="white--text">
            {{ $t('pages.about.title') }}
          </h1>
        </v-row>
        <v-row>
          <p class="white--text">
            {{ $t('pages.about.description') }}
          </p>
        </v-row>
        <v-row>
          <v-col>

          <v-btn class="rounded-xl" color="error">
            {{ $t('pages.about.detail') }}
          </v-btn>
          </v-col>
          <v-col>
            <base-blue-button>
              <v-icon color="white">mdi-play-outline</v-icon>
            {{ $t('pages.about.demo') }}
            </base-blue-button>
          </v-col>
        </v-row>
      </v-col>

      <v-col>
        <v-container fluid>
        <nuxt-img src="/logo_white.svg" class="logo"></nuxt-img>
        </v-container>
      </v-col>

      <v-spacer></v-spacer>
    </v-row>

</template>
