<template>
  <v-menu
    ref="menu"
    v-model="menu"
    content-class="rounded-xl"
    offset-y
    nudge-bottom="10px"
    min-width="0"
    :close-on-content-click="false"
    transition="scale-transition"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="groupAbstract"
        label="choisissez votre groupe"
        style="align-self: center"
        hide-details="auto"
        rounded
        color="primary"
        filled
        solo
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>

    <v-card active-class="rounded-xl" class="rounded-xl card">
      <v-card-text>
        <v-row v-for="(type, i) in group" :key="i">
          <v-col>
            <p>
              {{ i }}
            </p>
          </v-col>
          <v-col cols="8">
            <core-number-input v-model="type.model" :disabled="total >= max">
            </core-number-input>
          </v-col>
        </v-row>
        <v-row>
          {{ total }}
          {{ max }}
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="submit"> OK </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      max: 10,
      adult: 0,
      menu: false,
      selectedSlot: [],
      groupAbstract: '',
      group: {
        adult: {
          model: 0,
        },
        teenager: {
          model: 0,
        },
        children: {
          model: 0,
        },
        baby: {
          model: 0,
        },
      },
    }
  },
  computed: {
    total() {
      return Object.values(this.group).reduce((acc, cur) => acc + cur.model, 0)
    },
  },
  watch: {
    group(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    submit() {
      this.$emit('submit', this.group)
      this.groupAbstract = this.total + ' personnes'
      this.menu = false
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 400px;
}
</style>
