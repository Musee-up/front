<template>
  <v-footer app center flat >
    <v-container pa-0 fluid class="justify-space-between">
      <v-row>
        <v-col>test</v-col>
        <v-col v-for="(category, i) in categories" :key="i">
          <v-list>
            <v-list-item v-for="(item, index) in category" :key="index" >
              <NuxtLink to="#"> {{ item.title }} </NuxtLink>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <v-list>
            Abonnez vous a la newsletter!
            <v-flex class="d-flex" style="display: flex">
              <v-text-field
                filled
                solo
                rounded
                hide-details="auto"
                prepend-inner-icon="mdi-email"
                type="email"
                label="Écrivez votre mail ici..."
              ></v-text-field>
              <v-btn
                filled
                rounded
                class="ma-2"
                style="align-self: center;"
              >
                S'abonner
              </v-btn>
            </v-flex>
          </v-list>
        </v-col>
      </v-row>
      <v-row class="description">
        {{ $t("Copyright © 2021 Musée Up’ Tous droits réservés | Mentions légales |")}}
        <span>Musée Up’</span>
        {{$t("vous rapproche de la culture.") }}
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        [
          { link: '#', title: this.$t('Support') },
          { link: '#', title: this.$t('Conditions Générales') },
          { link: '#', title: this.$t('Politique d\'annulation') },
          { link: '#', title: this.$t('Politique de confidentialité') },
          { link: '#', title: this.$t('Centre d\'aide') },
        ],
        [
          { link: '#', title: this.$t('Notre Équipe') },
          { link: '#', title: this.$t('Qui sommes nous') },
          { link: '#', title: this.$t('Notre histoire') },
          { link: '#', title: this.$t('On recrute') },
          { link: '#', title: this.$t('Blog') },
        ],
        [
          { link: '#', title: this.$t('Nous contacter') },
          { link: '#', title: this.$t('Contact') },
          { link: '#', title: this.$t('Presse') },
          { link: '#', title: this.$t('Partenaires et entreprises') },
          { link: '#', title: this.$t('Influenceurs') },
        ],
      ],
    }
  },
}
</script>
