<template>
  <div class="text-center transparent">
    <v-dialog v-model="menu" width="500">
      <template #activator="{ on, attrs }">
        <v-btn
          rounded
          color="primary"
          class="white--text"
          v-bind="attrs"
          v-on="on">
          {{ $t('components.account.client.reservations.footer.review.button') }}
        </v-btn>
      </template>

      <v-card class="rounded-xl">
        <v-card-title>
          <h3 class="primary--text">
          {{ $t('components.account.client.reservations.footer.review.title') }}
          </h3>
        </v-card-title>
        <v-card-subtitle>
          {{ $t('components.account.client.reservations.footer.review.description') }}
          <span v-if="reservation" class="primary--text">{{reservation.date}}</span>
        </v-card-subtitle>
        <v-card-text>
          <v-rating
            v-model="rating"
            color="primary"
            background-color="grey lighten-4"
            :max="5"
            dense
            class="mb-0">
          </v-rating>
          <v-textarea
            v-model="comment"
            outlined
            :label="$t('components.account.client.reservations.footer.review.comment')"
            :counter="250"
            maxlength="250"
            rows="4"
            class="rounded-lg mt-2">
          </v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            rounded
            color="primary"
            class="white--text"
            @click="menu = false">
            {{ $t('components.account.client.reservations.footer.review.cancel') }}
          </v-btn>
          <v-btn
            rounded
            color="primary"
            class="white--text"
            @click="menu = false; submitReview()">
            {{ $t('components.account.client.reservations.footer.review.submit') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    reservation: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      menu: false,
      rating: 0,
      comment: ''
    }
  },
}
</script>
