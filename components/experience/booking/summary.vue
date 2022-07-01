<template>
  <v-dialog
    v-model="menu"
    content-class="rounded-xl"
    offset-y
    width="1000px"
    nudge-bottom="10px"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        rounded
        color="primary"
        class="white--text"
        v-bind="attrs"
        v-on="on"
      >
        {{ $t('Réserver') }}
      </v-btn>
    </template>

    <experience-booking
      v-if="!onSuccess"
      :experience="experience"
      :booking="booking"
      :guide="guide"
      @success="onSuccess = true"
    >
    </experience-booking>

    <experience-booking-success v-if="onSuccess" :experience="experience">
    </experience-booking-success>
  </v-dialog>
</template>

<script>
import Experience from '@/types/Experience'
import Guide from '@/types/Guide'

export default {
  props: {
    experience: {
      type: Experience,
      required: true,
    },
    guide: {
      type: Guide,
      required: true,
    },
    booking: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      onSuccess: false,
      menu: false,
    }
  },
}
</script>
