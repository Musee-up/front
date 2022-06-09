<template>
  <v-container class="my-8">
    <v-row>
      <v-col cols="1" class="d-flex align-center">
        <v-row>
          <v-col>
            <h3 >Themes</h3>
          </v-col>
          <v-col>
            <v-icon color="primary"> mdi-palette </v-icon>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="11">
        <v-slide-group>
          <v-slide-item
            v-for="(_, i) in iter" :key="i" class="mx-2">

            <div
              class="team-header"
              >

              <nuxt-img
                :width="width"
                :height="height"
                class="rounded-xl img-container"
                :src="theme.photo"
                >
              </nuxt-img>
            <v-container
              style="height: 100%; width: 100%;"
              fluid
              class="pt-6 justify-center align-center">

              <v-row class="justify-center">
                <h3 class="white--text ma-0">Art</h3>
              </v-row>

              <v-row class="justify-center">
                <p class="white--text ma-0">
                  23 experiences
                </p>
              </v-row>

            </v-container>

            </div>

          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
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

<style scoped lang="scss">

.team-header {
  height: 90px;
  width: 180px;
  position: relative;
  > * {
    position: relative;
  }
}

.img-container {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

</style>
