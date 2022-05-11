<template>
  <v-container>
    <h1>pages account</h1>
    <NuxtLink to="/guideexperiences">
      {{ $t('Publier votre annonce') }}
    </NuxtLink>

    <NuxtLink to="/guideexperience">
      {{ $t('Voir vos annonces') }}
    </NuxtLink>

    <NuxtLink to="/calendar">
      {{ $t('Voir votre calendrier') }}
    </NuxtLink>

    <NuxtLink to="/chat">
      {{ $t('Voir votre chat') }}
    </NuxtLink>
  </v-container>
</template>
