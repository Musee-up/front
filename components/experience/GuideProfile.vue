<template>
  <v-flex>
    <v-row>
      <h3 class="black--text py-4">{{ $t('Votre guide') }}</h3>
    </v-row>
    <v-row>
      <v-col cols="3" style="align-self: center">
        <nuxt-img style="width: inherit" src="/portrait.png"> </nuxt-img>
        <h4>Héloïse Doiteau</h4>
      </v-col>
      <v-col>
        <p class="description-list--text">
          {{
            $t(`Bonjour, je m’appelle Héloïse et je serais peut-être votre guide pour
          cette merveilleuse expérience culturelle :) Diplômée en littérature et
          de l’école du Louvre en médiation culturelle, cela fait bientôt 3 ans
          que j’exerce le métier de guide-conférencière en Île-de-France. Je
          suis passionnée par l’histoire de l’art, la littérature française du
          XIXe siècle et par le partage, notamment avec les enfants.`)
          }}
        </p>
      </v-col>
    </v-row>
  </v-flex>
</template>
