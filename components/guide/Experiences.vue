<template>
  <experience-list-horizontal
    link="/account/experiences/"
    :experiences="experiences"
  ></experience-list-horizontal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    experiences: 'guide/getExperiences',
  }),
}
</script>
