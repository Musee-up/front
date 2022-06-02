<template v-if="experience">
  <v-container>
    <v-row>
      <h3 class="title--text">
        {{ $t('components.account.client.reservations.experience.title') }}
      </h3>
    </v-row>
    <v-row>
      <v-col cols="2">
        <nuxt-img
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
        <v-row class="exp-attribute font-weight-bold">
          <p>
            {{ experience.type }}
          </p>
        </v-row>
        <v-row class="exp-attribute">
          <p>
            <v-icon small>mdi-map-marker</v-icon>
            <small class="detail--text">
              {{ experience.address }}
              /
              {{ experience.actionType }}
            </small>
          </p>
        </v-row>
      </v-col>
      <v-col class="d-flex align-center action" cols="3">
        <base-blue-button>
          {{ $t('components.account.client.reservations.experience.action') }}
        </base-blue-button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['experience'],
}
</script>

<style lang="scss" scoped>
.action {
  width: max-content;
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
