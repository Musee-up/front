<template>
  <v-container>
    <v-row>
      <v-col cols="9">
        <v-row justify="center" class="ma-4">
          <h2>
            {{ $t('pages.account.client.reservations.id.title') }}
            <span class="primary--text">
              {{ experience.date }} </span
            >:
            {{ experience.title }}
          </h2>
        </v-row>

        <v-row justify="center" class="ma-4">
          <p>
            {{ $t('pages.account.client.reservations.id.description')[0] }}
            <span class="primary--text">{{
              $t('pages.account.client.reservations.id.description')[1]
            }}</span>
            {{ $t('pages.account.client.reservations.id.description')[2] }}
            <span class="primary--text">{{
              $t('pages.account.client.reservations.id.description')[3]
            }}</span>
            {{ $t('pages.account.client.reservations.id.description')[4] }}
          </p>
        </v-row>

        <v-row justify="center">
          <experience-group-slide
            style="width: 60%"
            height="300"
          ></experience-group-slide>
        </v-row>

        <account-client-reservations-summary
          :experience="experience"
          :guide="guide"
        >
        </account-client-reservations-summary>
      </v-col>

      <div style="width: 11px !important">
        <v-divider vertical></v-divider>
      </div>

      <v-col cols="2">
        <v-row>
          <nuxt-img :src="experience.photo" class="mx-auto" style="width: 70%">
          </nuxt-img>
        </v-row>
        <v-row>
          <v-list>
            <v-list-item v-for="(item, i) in leftnav" :key="i">
              <v-list-item-icon>
                <v-icon color="primary">
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { experience, guide } from '@/data/mock.js'
export default {
  layout: 'account-client',
  data() {
    return {
      experience,
      guide,
      leftnav: [
        {
          text: '15 mai 2021 / 15h-17h',
          icon: 'mdi-calendar',
        },
        {
          text: 'Paris, France',
          icon: 'mdi-map-marker',
        },
        {
          text: '6 personnes',
          icon: 'mdi-account-multiple',
        },
      ],
    }
  },
}
</script>
