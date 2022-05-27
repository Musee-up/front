<template>
  <div>
    <v-card class="rounded-xl" rounded outlined>
      <v-date-picker
        v-model="dates"
        multiple
        no-title
        class="rounded-xl"
        readonly
      >
      </v-date-picker>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dates: [],
    }
  },
}
</script>
