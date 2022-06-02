<template>
  <v-app>
    <HomeNavbar />
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col class="justify-center" cols="2">
            <account-client-navigation></account-client-navigation>
          </v-col>
          <v-col cols="10">
            <Nuxt></Nuxt>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <HomeFooter />
  </v-app>
</template>
