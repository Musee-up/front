<template>
  <v-row>
    <v-col
      v-for="(attribute, index) in attributes"
      :key="index"
      cols="12"
      md="6"
    >
      <v-row v-if="attribute.text && attribute.text.length">
        <v-col cols="1" class="pa-0">
          <v-icon color="primary">
            {{ attribute.icon }}
          </v-icon>
        </v-col>
        <v-col class="pa-0">
          <p>
            {{ attribute.text }}
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    attributes: {
      type: Array[
        {
          icon: String,
          text: String,
        }
      ],
      required: true,
    },
  },
}
</script>
