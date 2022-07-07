<template>
  <v-col md="6" cols="12">
    <v-row>
      <!-- <v-col -->
      <!--   v-for="(category, index) in categories" -->
      <!--   :key="index" -->
      <!--   > -->

      <!--   <v-row> -->
      <!--     <h1> -->
      <!--       {{ link.title }} -->
      <!--     </h1> -->
      <!--   </v-row> -->

      <!--   <v-row -->
      <!--     v-for="(link, i) in category" -->
      <!--     :key="i" -->
      <!--     md="4" -->
      <!--     cols="12" -->
      <!--     > -->

      <!--     <NuxtLink :to="category.link"> {{ link.title }} </NuxtLink> -->
      <!--   </v-row> -->
      <!-- </v-col> -->
    </v-row>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          title: 'Support',
          links: [
            { link: '#', title: 'Conditions Générales' },
            { link: '#', title: "Politique d'annulation" },
            { link: '#', title: 'Politique de confidentialité' },
            { link: '/contact', title: "Centre d'aide" },
          ],
        },
        {
          title: 'Notre Equipe',
          links: [
            { link: '/about', title: 'Qui sommes nous' },
            { link: '/about', title: 'Notre histoire' },
            { link: '#', title: 'On recrute' },
            { link: '#', title: 'Blog' },
          ],
        },
        {
          title: 'Nous contacter',
          links: [
            { link: '/contact', title: 'Contact' },
            { link: '#', title: 'Presse' },
            { link: '#', title: 'Partenaires et entreprises' },
            { link: '#', title: 'Influenceurs' },
          ],
        },
      ],
    }
  },
}
</script>
