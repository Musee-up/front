<template v-if="experience">
  <v-container>
    <v-row>
      <h3 class="title--text">
        {{ $t('components.account.client.bookings.experience.title') }}
      </h3>
    </v-row>
    <v-row>
      <v-col cols="12" md="2">
        <nuxt-img
          v-if="experience.photo"
          class="rounded-xl"
          width="100px"
          height="100"
          :src="experience.photo"
        ></nuxt-img>
      </v-col>
      <v-col class="exp-list">
        <v-row>
          <h4 class="exp-title">
            {{ experience.title }}
          </h4>
        </v-row>
        <v-row class="exp-attribute">
          <p>Expérience partagée</p>
        </v-row>
        <v-row class="exp-attribute">
          <p>
            <v-icon small>mdi-map-marker</v-icon>
            <small class="detail--text">
              {{ `${experience.location} /${types}` }}
            </small>
          </p>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <v-row
          justify="center" justify-md="end"
          class="text-right">
        <nuxt-link :to="`/experiences/${experience.id}`">
          <base-blue-button>
            {{ $t('components.account.client.bookings.experience.action') }}
          </base-blue-button>
        </nuxt-link>

        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Experience from '@/types/Experience'

export default {
  props: {
    experience: {
      type: Experience,
      required: true,
    },
  },
  computed: {
    types() {
      return this.experience.types?.map((x) => x.name).join(', ')
    },
  },
}
</script>

<style lang="scss" scoped>
.action {
  width: max-content;
  justify-content: right;
}

.exp-list {
  height: fit-content;
}

.exp-attribute {
  height: 30px;
}

.exp-title {
  font-weight: lighter;
  font-size: 25px;
  font-family: 'Vollkorn';
}

p {
  font-size: 18px;
}
</style>
