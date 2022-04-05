<template>
  <v-container rounded class="d-flex" fluid style="height:414px">
    <v-col cols="3">
      <nuxt-img src="/demo_list.svg" >
      </nuxt-img>
    </v-col>


    <v-col class="d-flex flex-column align-content-space-between flex-wrap">
      <v-row justify="space-between">
        <v-col >
          <h2>{{ props.experience.title }}</h2>
        </v-col>
        <v-col class="text-right">
          <nuxt-link :to="`/experiences/${props.id}`">
            <base-blue-button :text="$t('Réserver')">
            </base-blue-button>
          </nuxt-link>
        </v-col>
      </v-row>

      <v-row >
        <v-col cols="10">
          {{ $t("Présentation de l'experience: ") + props.experience.description }}
        </v-col>
        <v-col style="text-align:center;">
          <v-icon color="primary">mdi-camera</v-icon>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>

      <v-row style="height:15px">
        <v-col cols="8">
          <p>
            {{
            $t('A partir de ') +
            props.experience.price +
            '€ ' +
            $t('par personne')
            }}
          </p>
        </v-col>

        <ExperiencesListItemIcon
          :iconValue="props.experience.duration.match(/\d\d:\d\d/)[0]"
          icon="mdi-alarm"
          />

        <ExperiencesListItemIcon
          :iconValue="props.experience.transportation"
          icon="mdi-walk"
          />

        <ExperiencesListItemIcon
          :iconValue="$t('Handifriendly')"
          icon="mdi-human-wheelchair"
          v-if="props.experience.handifriendly"
          />
      </v-row>
    </v-col>
  </v-container>
</template>

<script setup>
const props = defineProps({
  experience: Object,
  id: Number,
})
</script>
<style scoped>

.v-icon {
  align-items: inherit !important;
}
</style>
