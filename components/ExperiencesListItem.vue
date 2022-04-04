<template>
  <v-card rounded class="d-flex" fluid>
    <nuxt-img fit="cover" src="/demo_list.svg" width="514" height="340">
    </nuxt-img>
    <v-container class="d-flex flex-column flex-wrap">
      <v-container fluid class="d-flex justify-space-between">
        <h2>{{ props.experience.title }}</h2>
        <v-btn> Réserver </v-btn>
      </v-container>
      {{ $t("Présentation de l'experience: ") + props.experience.description }}
      <v-spacer></v-spacer>
      <v-container fluid class="d-flex justify-space-between">
        <p>
          {{
            $t('A partir de ') +
            props.experience.price +
            '€ ' +
            $t('par personne')
          }}
        </p>

        <div class="d-flex justify-space-between justify-center">
          <p>{{ props.experience.duration.match(/\d\d:\d\d/)[0] }}</p>
          <v-icon color="primary">mdi-alarm</v-icon>
        </div>

        <div class="d-flex justify-space-between">
          <p>{{ props.experience.transportation }}</p>
          <v-icon color="primary">mdi-walk</v-icon>
        </div>

        <div
          v-if="props.experience.handifriendly"
          class="d-flex justify-space-between"
        >
          <p>{{ $t('Handifriendly') }}</p>
          <v-icon color="primary">mdi-human-wheelchair</v-icon>
        </div>
      </v-container>
    </v-container>
  </v-card>
</template>

<script setup>
const props = defineProps({
  experience: Object,
})
// const pretty_duration = (value) => {
//  return this.$moment(String(value)).format('hh:mm')
// }
</script>
<style>
.v-icon {
  align-items: inherit !important;
}
</style>
