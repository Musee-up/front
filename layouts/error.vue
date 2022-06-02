<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-row>
            <h1>
              {{ $t('error.oops') }}
            </h1>
          </v-row>

          <v-row>
            <h2>
              {{ $t('error.404') }}
            </h2>
          </v-row>
          <v-row>
            <p>
              {{ $t('error.description') }}
            </p>
          </v-row>

          <v-row>
            <v-col>
              <NuxtLink to="/">
              <base-blue-button>
                {{ $t('error.home') }}
              </base-blue-button>
              </NuxtLink>
            </v-col>
            <v-col>
              <v-btn outlined rounded color="primary" class="ma-2">
                {{ $t('error.help') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <nuxt-img src="/error_drawing.svg">
          </nuxt-img>
        </v-col>
      </v-row>
    </v-container>
    <!-- <h1 v-if="error.statusCode === 404"> -->
    <!--   {{ pageNotFound }} -->
    <!-- </h1> -->
    <!-- <h1 v-else> -->
    <!--   {{ otherError }} -->
    <!-- </h1> -->
    <!-- <base-blue-button></base-blue-button> -->
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style lang="scss" scoped>

button {
  justify-self: center;
  align-self: center;
}

h1 {
  font-size: 20px;
}

</style>
