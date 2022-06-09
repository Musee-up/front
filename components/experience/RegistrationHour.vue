<template>
  <v-menu
    ref="menu"
    v-model="menu"
    offset-y
    nudge-bottom="10px"
    nudge-right="60"
    min-width="0"
    :close-on-content-click="false"
    transition="scale-transition"
    >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="slot"
        label="choisissez la date"
        style="align-self: center"
        hide-details="auto"
        rounded
        filled
        solo
        readonly
        v-bind="attrs"
        v-on="on"
        ></v-text-field>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in slots"
        :key="index">
        <p>
          item
        </p>
        <p>
          {{ item.start }} - {{ item.end }}
        </p>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: ['slots'],
  data () {
    return {
      menu: false,
      slot: [],
    }
  }
}
</script>
