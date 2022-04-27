<template>
  <v-container
    class="justify-center"
    style="padding-right: 5%; padding-left: 5%"
  >
    <v-row class="justify-center">
      <v-col class="text-left">
        <v-text-field
          :label="$t('Indiquez le titre de votre expérience (maximum 40 caractères espaces compris)')"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-container fluid>
      <experience-creation-slide-group style="height:100px"/>
      </v-container>
    </v-row>

    <v-divider class="my-9"></v-divider>

    <v-row>
      <v-col cols="8">
        <experience-creation-attributes/>

        <v-divider class="my-9"></v-divider>

        <v-row class="d-flex flex-row">
          <h3 class="black--text py-4">
            {{ $t("Présentation de l'experience") }}
          </h3>
        </v-row>
        <v-row>
          <v-text-field
            :label="$t('Ecrivez-ici la présentation de votre expérience. (maximum 700 caractères espaces compris).')"
          ></v-text-field>
        </v-row>

        <v-divider class="my-9"></v-divider>

        <experience-guide-profile/>
      </v-col>

      <v-col>
        <v-row class="justify-end">
          <ExperienceRegistrationForm style="width: auto" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
