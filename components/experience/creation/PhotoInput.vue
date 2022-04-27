<template>
  <v-btn outlined onclick="document.getElementById('selectedFile').click();">
    <v-icon color="primary">mdi-download</v-icon>
    <input id="selectedFile" type="file" style="display: none;" />
  </v-btn>
</template>

