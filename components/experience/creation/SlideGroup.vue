<template>
  <v-slide-group>
    <v-slide-item style="height: 100%; width: 30%">
      <experience-creation-photo-input />
    </v-slide-item>
    <v-slide-item style="height: 100%; width: 30%">
      <v-container fluid class="align-content-space-between">
        <v-row
          ><experience-creation-photo-input class="my-2" style="width: 100%"
        /></v-row>
        <v-row
          ><experience-creation-photo-input class="my-2" style="width: 100%"
        /></v-row>
      </v-container>
    </v-slide-item>
    <v-slide-item style="height: 100%; width: 30%">
      <experience-creation-photo-input />
    </v-slide-item>
  </v-slide-group>
</template>
