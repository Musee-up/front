<template>
  <v-row style="height: max-content" class="ma-4">
    <v-col cols="3" class="align-self-center">
      <nuxt-img style="width: inherit" src="/demo_list.svg"> </nuxt-img>
    </v-col>

    <v-col
      class="d-flex flex-column justify-content-space-between pl-4 pa-0"
      cols="9"
    >
      <v-row justify="space-between">
        <v-col
          cols="10"
          class="black--text font-weight-bold d-flex align-center"
        >
          <h2>
            {{ experience.title }}
          </h2>
        </v-col>
        <v-col cols="2" class="text-right">
          <slot name="link"> </slot>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="10" class="description-list--text">
          <p v-if="experience.description" class="exp-description">
            {{
              $t('components.experience.list.presentation', {
                p: experience.description,
              }).trim()
            }}
          </p>
        </v-col>
        <v-col cols="2" class="px-8 align-self-center text-right">
          <v-icon color="primary"> mdi-camera </v-icon>
        </v-col>
      </v-row>

      <v-row align-content="center" class="att-container">
        <v-col>
          <p v-if="experience.price" class="font-weight-bold">
            {{
              $t('components.experience.list.price', { n: experience.price })
            }}
          </p>
        </v-col>

        <v-col
          v-for="(item, index) in attr"
          :key="index"
          cols="2"
          class="pa-2 text-center align-center"
          width="auto"
        >
          <p class="ma-0">
            {{ item.label }}
            <v-icon color="primary" class="ma-2">
              {{ item.icon }}
            </v-icon>
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Experience from '@/types/Experience'

export default {
  props: {
    experience: {
      type: Experience,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
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
          label: 'handifriendly',
          icon: 'mdi-human-wheelchair',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.exp-description {
  white-space: pre-line;
}

.att-container {
  height: max-content;
}

.v-icon {
  align-items: inherit !important;
}
</style>
