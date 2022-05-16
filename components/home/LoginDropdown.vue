<template>
  <div>
    <v-menu pa-0 ma-0 offset-y>
      <template #activator="{ on, attrs }">
        <v-btn
          style="background-color: transparent"
          elevation="0"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon class="white--text"> mdi-account-circle </v-icon>
        </v-btn>
      </template>
      <v-list v-if="$strapi.user">
        <v-list-item class="justify-center">
          <v-btn text @click.prevent="() => $strapi.logout()"> Logout </v-btn>
        </v-list-item>
        <v-list-item>
          <NuxtLink to="/account"> {{ $t('Mon compte') }} </NuxtLink>
        </v-list-item>
      </v-list>
      <v-list v-else>
        <v-list-item>
          <RegisterForm />
        </v-list-item>
        <v-list-item>
          <HomeLogin />
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn class="rounded-lg blue-filled" background="blue">
      <NuxtLink to="#"> {{ $t('Publier votre annonce') }} </NuxtLink>
    </v-btn>
  </div>
</template>
