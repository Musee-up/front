<template>

  <v-card
    class="vouchers rounded-xl"
    rounded
    outlined>
    <v-card-title>
      <div class="pa-2 d-flex text-center">
        <h2 class="align-self-center ma-0 mx-2 black--text">
          {{title.label}}
        </h2>
        <v-icon 
          class="mx-2">
          {{title.icon}}
        </v-icon>
      </div>

    </v-card-title>


    <v-divider></v-divider>

    <v-card-text>
      <div
        v-for="(voucher, i) in vouchers"
        :key="i"
        >
        <account-dashboard-voucher-item
          :voucher="voucher"
          >
        </account-dashboard-voucher-item>

        <v-divider></v-divider>
      </div>
    </v-card-text>

  </v-card>

</template>

<script>
export default {
  data () {
    return {
      title: {
        label: "Mes paiements",
        icon: "mdi-credit-card-online"
      },
      vouchers: [
        {
          img: "/portrait.png",
          title: "Les recoins de Montmartre",
          type: "Experience Musée Up",
          icon:"mdi-map",
          date: Date.now(),
          price: 108
        },
        {
          img: "/portrait.png",
          title: "Les recoins de Montmartre",
          type: "Experience Musée Up",
          icon:"mdi-map",
          date: Date.now(),
          price: 108
        },{
          img: "/portrait.png",
          title: "Les recoins de Montmartre",
          type: "Experience Musée Up",
          icon:"mdi-map",
          date: Date.now(),
          price: 108
        },]
    }
  }
}
</script>

<style lang="scss" scoped>
.vouchers {
  height: 20em;
  width: 100%;
}

</style>
