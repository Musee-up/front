<template>
  <v-footer app center flat bottom fixed absolute>
    <v-container fluid class="justify-space-between pa-4">
      <v-divider class="my-4"></v-divider>
      <v-row style="align-self: center">
        <v-col>
          <NuxtLink
            tag="img"
            style="height: 3em"
            :src="require('@/static/logo_blue.png')"
            to="/"
          >
          </NuxtLink>

          <v-row class="description--text pa-4">
            {{ $t('vous rapproche de la culture.') }}
          </v-row>

          <v-row class="d-flex">
            <v-icon class="px-2" color="blue--text"> mdi-facebook </v-icon>
            <v-icon class="px-2" color="blue--text"> mdi-instagram </v-icon>
            <v-icon class="px-2" color="blue--text"> mdi-twitter </v-icon>
            <v-icon class="px-2" color="blue--text"> mdi-linkedin </v-icon>
            <v-icon class="px-2" color="blue--text"> mdi-youtube </v-icon>
            <!-- <v-icon color="grey"> mdi-facebook </v-icon> -->
          </v-row>
        </v-col>
        <v-col v-for="(category, i) in categories" :key="i">
          <v-list>
            <v-list-item v-for="(item, index) in category" :key="index">
              <NuxtLink :to="item.link"> {{ item.title }} </NuxtLink>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <v-list>
            <v-list-item>
              {{ $t('Abonnez vous a la newsletter!') }}
            </v-list-item>
            <v-list-item>
              <v-row :class="$vuetify.breakpoint.mdAndDown || 'flex-column'">
                <v-col>
                  <v-text-field
                    filled
                    solo
                    rounded
                    hide-details="auto"
                    prepend-inner-icon="mdi-email"
                    type="email"
                    color="$white"
                    class="description--text"
                    label="Écrivez votre mail ici..."
                  ></v-text-field>
                </v-col>

                <v-col>
                  <base-blue-button>
                    {{ $t("S'abonner") }}
                  </base-blue-button>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row class="description--text">
        {{
          $t(
            'Copyright © 2021 Musée Up’ Tous droits réservés | Mentions légales |'
          )
        }}
        <span class="primary--text">Musée Up’</span>
        {{ $t('vous rapproche de la culture.') }}
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HomeFooter extends Vue {
  private categories: Array<Object> = [
    [
      { link: '#', title: this.$t('Support') },
      { link: '#', title: this.$t('Conditions Générales') },
      { link: '#', title: this.$t("Politique d'annulation") },
      { link: '#', title: this.$t('Politique de confidentialité') },
      { link: '/contact', title: this.$t("Centre d'aide") },
    ],
    [
      { link: '/about', title: this.$t('Notre Équipe') },
      { link: '/about', title: this.$t('Qui sommes nous') },
      { link: '/about', title: this.$t('Notre histoire') },
      { link: '#', title: this.$t('On recrute') },
      { link: '#', title: this.$t('Blog') },
    ],
    [
      { link: '/contact', title: this.$t('Nous contacter') },
      { link: '/contact', title: this.$t('Contact') },
      { link: '#', title: this.$t('Presse') },
      { link: '#', title: this.$t('Partenaires et entreprises') },
      { link: '#', title: this.$t('Influenceurs') },
    ],
  ]
}
</script>

<style lang="scss" scoped>
.v-footer {
  background-color: $white;
}

.v-footer * {
  font-weight: bold;
  font-size: 14px;
}
</style>
