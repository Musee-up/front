<template>
  <v-container>
    <v-row>
      <h3 class="title--text">
        {{ $t('components.account.client.bookings.guide.title') }}
      </h3>
    </v-row>

    <v-row>
      <v-col cols="2">
        <v-avatar width="100" height="100">
          <nuxt-img
            v-if="guide.photo"
            width="100"
            height="100"
            :src="guide.photo"
          ></nuxt-img>
          <v-icon v-else x-large> mdi-account-circle </v-icon>
        </v-avatar>
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

        <v-row :class="$vuetify.breakpoint.lgAndDown && 'flex-column'">
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

      <v-col class="d-flex align-center action" cols="3">
        <nuxt-link :to="`/guides/${guide.id}`">
          <base-blue-button>
            {{ $t('components.account.client.bookings.guide.action') }}
          </base-blue-button>
        </nuxt-link>
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
.col {
  //include for-desktop-down
  @include for-desktop-down {
    padding: 0px;
  }
}
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
