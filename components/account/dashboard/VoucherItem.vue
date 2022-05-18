<template>
  <v-container class="d-flex">
    <v-row>
    <v-col>
      <nuxt-img
        width="50"
        height="50"
        fit="cover"
        :src="voucher.img">
      </nuxt-img>
    </v-col>
    <v-col>
      <v-flex>
        <p> {{ voucher.title }} </p>
        <p> {{ voucher.type }} </p>
      </v-flex>

    </v-col>
    <v-col>
      <p> {{ voucher.date }} </p>
    </v-col>

    <v-col>
      <v-icon>
        {{ icon }}
      </v-icon>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props:['voucher'],
  data () {
    return {
      icon: "mdi-ticket-confirmation"
    }
  }
}
</script>
