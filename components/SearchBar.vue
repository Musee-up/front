<template>
  <v-container pa-0 fluid center fill-height>
    <v-divider></v-divider>
    <v-row align="center" justify="center">
      <h1 style="text-align: left" class="primary--text">
        {{ $t('Le monde est un musée,') }}<br />{{ $t('découvrez-le !') }}
      </h1>
    </v-row>
    <v-row align="center" justify="center">
      <v-card
        align="center"
        justify="center"
        class="d-flex rounded-pill primary"
        style="width: 1000px"
      >
        <v-autocomplete
          filled
          solo
          hide-details="auto"
          class="pa-4 rounded-pill"
          label="Ou souhaitez vous allez ?"
        ></v-autocomplete>
        <DateMenu />
        <v-select
          filled
          solo
          hide-details="auto"
          :items="peopleNumber"
          type="number"
          class="pa-4 rounded-pill"
          label="Nombres de visiteurs"
        ></v-select>

        <v-btn
          icon
          x-large
          color="blue"
          class="pr-4"
          style="align-self: center"
        >
          <v-icon color="blue"> mdi-magnify </v-icon>
        </v-btn>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      peopleNumber: [...Array(5).keys()],
    }
  },
}
</script>
