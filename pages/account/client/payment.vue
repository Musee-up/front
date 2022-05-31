<template>
  <v-container>
    <v-col cols="9">
      <v-row class="justify-center">
        <h2>{{ $t('pages.account.client.payment.title') }}</h2>
      </v-row>

      <v-row class="justify-center">
        <p>
          {{ $t('pages.account.client.payment.description') }}
        </p>
      </v-row>

      <v-row class="justify-center">
        <v-col cols="8">
          <v-card class="rounded-xl">
            <v-card-title>
              {{ $t('pages.account.client.payment.card.title') }}
            </v-card-title>

            <v-card-text>
              {{ $t('pages.account.client.payment.card.text') }}
              <v-divider></v-divider>

              <v-row class="align-center justify-center">
                <v-col>
                  <nuxt-img :src="logo"></nuxt-img>
                </v-col>

                <v-col>
                  <p>{{ card }}</p>
                </v-col>

                <v-col class="text-right">
                  <v-btn rounded color="delete" class="white--text">
                    Supprimer
                  </v-btn>
                </v-col>
              </v-row>

              <v-divider></v-divider>
            </v-card-text>

            <v-card-actions>
              <account-client-payment-form> </account-client-payment-form>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  layout: 'account-client',
  data() {
    return {
      card: 'Visa **** 4369',
      logo: '/payment_bank_logo.png',
    }
  },
}
</script>
