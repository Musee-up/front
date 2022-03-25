<template>
  <v-footer app center flat style="background: white">
    <v-container pa-0 fluid class="justify-space-between">
      <v-row>
        <v-col>test</v-col>
        <v-col v-for="(category, i) in categories" :key="i">
          <v-list>
            <v-list-item v-for="(item, index) in category" :key="index">
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
                style="
                  color: white !important;
                  background-color: #064888;
                  align-self: center;
                "
              >
                S'abonner
              </v-btn>
            </v-flex>
          </v-list>
        </v-col>
      </v-row>
      <v-row>
        Copyright © 2021 Musée Up’ Tous droits réservés | Mentions légales |
        Musée Up’ vous rapproche de la culture.
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => {
    return {
      categories: [
        [
          { link: '#', title: 'Support' },
          { link: '#', title: 'Conditions Générales' },
          { link: '#', title: "Politique d'annulation" },
          { link: '#', title: 'Politique de confidentialité' },
          { link: '#', title: "Centre d'aide" },
        ],
        [
          { link: '#', title: 'Notre Équipe' },
          { link: '#', title: 'Qui sommes nous' },
          { link: '#', title: 'Notre histoire' },
          { link: '#', title: 'On recrute' },
          { link: '#', title: 'Blog' },
        ],
        [
          { link: '#', title: 'Nous contacter' },
          { link: '#', title: 'Contact' },
          { link: '#', title: 'Presse' },
          { link: '#', title: 'Partenaires et entreprises' },
          { link: '#', title: 'Influenceurs' },
        ],
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

#app {
  font-family: 'Roboto', sans-serif;
}
* {
  text-transform: none !important;
  text-decoration: none !important;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #064888 !important;
}
</style>
