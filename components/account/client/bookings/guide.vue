<template>
  <v-container v-if="user">
    <v-row>
      <h3 class="title--text">
        {{ $t('components.account.client.bookings.guide.title') }}
      </h3>
    </v-row>

    <v-row class="mt-8" justify="center">
      <v-col order="1" cols="4" md="2">
        <v-avatar width="100" height="100">
          <nuxt-img
            v-if="user.photo"
            width="100"
            height="100"
            :src="user.photo"
          ></nuxt-img>
          <v-icon v-else x-large> mdi-account-circle </v-icon>
        </v-avatar>
      </v-col>

      <v-col order="2" class="exp-list">
        <v-row justify="start">
          <v-col class="text-left pa-0" cols="12">
            <h4 class="exp-title">{{ user.firstname }} {{ user.lastname }}</h4>
          </v-col>
          <v-col cols="12" class="pa-0 text-left">
            <h4>
              Guide Conférencier
              <!-- {{ user.role }} -->
            </h4>
          </v-col>

          <v-col cols="12" md="6" class="pa-0 py-2 pa-md-4">
            <p class="text-left primary--text">
              <v-icon color="primary">mdi-phone</v-icon>
              {{ user.phone }}
            </p>
          </v-col>

          <v-col cols="12" md="6" class="pa-0 py-2 pa-md-4">
            <p class="primary--text text-left">
              <v-icon color="primary"> mdi-email-outline </v-icon>
              {{ user.email }}
            </p>
          </v-col>
        </v-row>
      </v-col>

      <v-col order="3" cols="12" md="3">
        <v-row justify-md="end" justify="center">
          <nuxt-link :to="`/guides/${id}`">
            <base-blue-button>
              {{ $t('components.account.client.bookings.guide.action') }}
            </base-blue-button>
          </nuxt-link>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import User from '@/types/User'
export default {
  props: {
    user: {
      type: User,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
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
  @include for-phone-only {
    margin: 0px;
  }
}
</style>
