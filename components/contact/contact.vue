<template>
  <v-row>
    <v-col 
      v-for="(item, index) in $t('components.contact.contact')"
      :key="index"
      class="ma-16"
      >

      <v-card
        class="rounded-xl"
        >
        <v-card-title>
          <v-icon>{{ item.icon }}</v-icon>
          <span class="headline">{{ item.title }}</span>
        </v-card-title>
        <v-card-text>
          <p>{{ item.description }}</p>
          <br/>
          <p class="primary--text">{{ email[index] }}</p>
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>


<script>

export default {
  data () {
    return {
      email: {
        staffing: 'job@museeup.com',
        support: 'contact@museeup.com',
        press: 'press@museeup.com',
      },
    }
  }
}

</script>
