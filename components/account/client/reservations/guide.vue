<template>
  <v-container>
    <v-row>
      <h3 class="title--text">
        {{ $t('components.account.client.reservations.guide.title') }}
      </h3>
    </v-row>

    <v-row>
      <v-col cols="1">
        <nuxt-img
          class="rounded-xl"
          width="100px"
          height="100"
          :src="guide.photo"
        ></nuxt-img>
      </v-col>

      <v-col class="exp-list">
        <v-row>
          <h4 class="exp-title">{{ guide.firstname }} {{ guide.lastname }}</h4>
        </v-row>
        <v-row class="exp-attribute font-weight-bold">
          <p>
            {{ guide.role }}
          </p>
        </v-row>

        <v-row class="ma-0">
          <v-col>
            <p class="primary--text">
              <v-icon color="primary">mdi-phone</v-icon>
              {{ guide.phone }}
            </p>
          </v-col>

          <v-col>
            <p class="primary--text">
              <v-icon color="primary"> mdi-email </v-icon>
              {{ guide.email }}
            </p>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="d-flex align-center action" cols="2">
        <base-blue-button>
          {{ $t('components.account.client.reservations.guide.action') }}
        </base-blue-button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['guide'],
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
  @extend .ma-0;
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
