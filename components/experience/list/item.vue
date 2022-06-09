<template>
  <v-row
    style="height:max-content"
    class="ma-4">
    <v-col cols="3" class="align-self-center">
      <nuxt-img style="width: inherit" src="/demo_list.svg"> </nuxt-img>
    </v-col>

    <v-col
      class="align-space-between"
      cols="9"
      >
        <v-row
          justify="space-between"
          >
          <v-col
            cols="6"
            class="black--text font-weight-bold">
            <h2>
              {{ experience.title }}
            </h2>
          </v-col>
          <v-col
            cols="6"
            class="text-right">
            <slot name="link"> </slot>
          </v-col>
        </v-row>

        <v-row
          class="my-4"
          style="height:50%">
          <v-col class="description-list--text pa-4">
            <p v-if="experience.description">
              {{
              $t("Présentation de l'experience: ") + experience.description
              }}
            </p>
          </v-col>
          <v-col
            cols="1"
            class="align-self-center">
            <v-icon color="primary">
              mdi-camera
            </v-icon>
          </v-col>
        </v-row>

        <v-row
          align-self="end"
          >
          <v-col align-self="center">
            <p
              v-if="experience.price"
              class="attributes-text font-weight-bold">
              {{
              $t('A partir de ') +
              experience.price +
              $t('€ par personne')
              }}
            </p>
          </v-col>

          <v-col
            v-for="(item, index) in attr"
            :key="index"
            align-self="center"
            cols="2"
            >
            <experience-list-item-icon
              :icon-value="item.label"
              :icon="item.icon"
              >
            </experience-list-item-icon>
          </v-col>
        </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['experience', 'id'],
  data() {
    return {
      attr: [
        {
          label: this.experience.duration.match(/\d\d:\d\d/)[0],
          icon: 'mdi-alarm',
        },
        {
          label: this.experience.transportation,
          icon: 'mdi-walk',
        },
        {
          // label: this.experience.handifriendly,
          label: 'handifriendly',
          icon: 'mdi-human-wheelchair',
        },
      ]
    }
  },
}
</script>

<style scoped lang="scss">

.v-icon {
  align-items: inherit !important;
}
</style>
