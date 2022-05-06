<template>
  <v-container rounded class="d-flex">
    <v-col cols="3" style="align-self: center">
      <nuxt-img style="width: inherit" src="/demo_list.svg"> </nuxt-img>
    </v-col>

    <v-col class="d-flex flex-column align-content-space-between flex-wrap">
      <v-row justify="space-between">
        <v-col class="black--text font-weight-bold">
          <h2>{{ props.experience.title }}</h2>
        </v-col>
        <v-col class="text-right">
          <slot name="link"> </slot>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="10" class="description-list--text">
          {{
            $t("Présentation de l'experience: ") + props.experience.description
          }}
        </v-col>
        <v-col style="text-align: center">
          <v-icon color="primary">mdi-camera</v-icon>
        </v-col>
      </v-row>

      <v-row style="height: 15%">
        <v-col style="align-self: center">
          <p class="bold attributes-text font-weight-bold">
            {{
              $t('A partir de ') +
              props.experience.price +
              '€ ' +
              $t('par personne')
            }}
          </p>
        </v-col>

        <v-col style="display: inline-flex; max-width: fit-content">
          <ExperienceListItemIcon
            :icon-value="props.experience.duration.match(/\d\d:\d\d/)[0]"
            icon="mdi-alarm"
          />

          <ExperienceListItemIcon
            :icon-value="props.experience.transportation"
            icon="mdi-walk"
          />

          <ExperienceListItemIcon
            v-if="props.experience.handifriendly"
            :icon-value="$t('Handifriendly')"
            icon="mdi-human-wheelchair"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script setup lang="ts">
const props = defineProps({
  experience: {
    type: Object,
    default: null,
  },
  id: {
    type: Number,
    default: 0,
  },
})
</script>

<style scoped>
.v-icon {
  align-items: inherit !important;
}
</style>
