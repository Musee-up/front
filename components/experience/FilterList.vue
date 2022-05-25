<template>
  <v-container class="my-8">
    <v-row>
      <v-col cols="1" class="d-flex align-center">
        <v-row>
          <v-col>
            <h4 class="primary--text">Themes</h4>
          </v-col>
          <v-col>
            <v-icon small color="primary"> mdi-palete </v-icon>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="11">
        <v-slide-group>
          <v-slide-item v-for="(_, i) in iter" :key="i" class="mx-2">
            <nuxt-img
              :width="width"
              :height="height"
              class="theme rounded-xl"
              :src="theme.photo"
            >
            </nuxt-img>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
    <!-- <v-row> -->
    <!-- <v-col -->
    <!--   v-for="(_, i) in iter" -->
    <!--   :key="i" -->
    <!--   > -->
    <!--   <v-card elevation="0" class="mx-auto rounded-xl justify-center text-center"> -->
    <!--     <nuxt-img :width="width" :height="height" class="profile" :src="theme.photo"> -->
    <!--     </nuxt-img> -->
    <!--   </v-card> -->
    <!-- </v-col> -->
    <!-- </v-row> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      width: 180,
      height: 90,
      iter: [...Array(15).keys()],
      theme: {
        title: 'histoire',
        photo: '/exp_photo.png',
        experience: {
          count: 23,
        },
      },
    }
  },
}
</script>
