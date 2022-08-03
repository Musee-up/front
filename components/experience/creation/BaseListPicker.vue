<template>
  <v-menu
    v-model="menu2"
    class="rounded-xl"
    :close-on-content-click="false"
    :nudge-bottom="60"
    :nudge-right="60"
    max-width="290px"
    min-width="290px"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        readonly
        outlined
        class="rounded-xl"
        :label="label"
        :prepend-icon="icon"
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-card v-if="menu2">
      <v-container>
        <slot :value="model" @input="x => model = x"></slot>

        <v-row class="justify-end">
          <base-blue-button>
            {{ $t('common.validate') }}
          </base-blue-button>
        </v-row>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {},
    },
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  data() {
    return {
      menu2: false,
    }
  },
}
</script>
