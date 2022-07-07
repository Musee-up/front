<template>
  <v-app>
    <home-navbar v-if="!$vuetify.breakpoint.mobile" />
    <v-main>
      <Nuxt v-if="!$slots.default" />
      <slot></slot>
    </v-main>
    <core-footer-mobile v-if="$vuetify.breakpoint.mobile"> </core-footer-mobile>
    <home-footer />
  </v-app>
</template>
