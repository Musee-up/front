<template>
  <v-container
    class="justify-center"
    style="padding-right: 5%; padding-left: 5%"
  >
    <v-row class="justify-center">
      <v-col class="text-left">
        <v-text-field
          label="Indiquez le titre de votre expérience (maximum 40 caractères espaces compris)"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <experience-group-slide />
    </v-row>

    <v-divider class="my-9"></v-divider>

    <v-row>
      <v-col cols="8">
        <v-row>
          <v-list dense>
            <v-list-item-group>
              <v-list-item v-for="(item, i) in []" :key="i">
                <v-list-item-icon>
                  <v-icon color="primary" v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content color="primary">
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-row>

        <v-divider class="my-9"></v-divider>

        <v-row class="d-flex flex-row">
          <h3 class="black--text py-4">
            {{ $t("Présentation de l'experience") }}
          </h3>
        </v-row>
        <v-row>
          <v-text-field
            label="Ecrivez-ici la présentation de votre expérience. (maximum 700 caractères espaces compris)."
          ></v-text-field>
        </v-row>

        <v-divider class="my-9"></v-divider>

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
              Bonjour, je m’appelle Héloïse et je serais peut-être votre guide
              pour cette merveilleuse expérience culturelle :) Diplômée en
              littérature et de l’école du Louvre en médiation culturelle, cela
              fait bientôt 3 ans que j’exerce le métier de guide-conférencière
              en Île-de-France. Je suis passionnée par l’histoire de l’art, la
              littérature française du XIXe siècle et par le partage, notamment
              avec les enfants.
            </p>
          </v-col>
        </v-row>
      </v-col>

      <v-col>
        <v-row class="justify-end">
          <ExperienceRegistrationForm style="width: auto" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
