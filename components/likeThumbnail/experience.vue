<template>
  <like-overview
    v-if="photo"
    :link="link"
    :width="width"
    :photo="photo(experience)"
    :color="isLiked(experience.id) ? 'red' : 'white'"
    :action="() => addToFavorite(experience.id)"
  >
  </like-overview>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { verticalWidth } from '@/tools/photos.js'
import mutateUser from '@/graphql/mutations/me'
import Experience from '@/types/Experience'

export default {
  props: {
    experience: {
      type: Experience,
      required: true,
    },
    link: {
      type: String,
      default: '/experiences/',
    },
  },
  computed: {
    ...mapGetters({
      favorites: 'user/getFavorites',
    }),
    favoriteIDs: {
      get() {
        return this.favorites?.experiences.data.map((favorite) => favorite.id)
      },
    },
    width() {
      return verticalWidth(this.$vuetify.breakpoint)
    },
  },
  mounted() {
    this.load()
  },
  methods: {
    ...mapActions({
      load: 'user/load',
    }),
    isLiked(id: string) {
      return this.favoriteIDs?.includes(id)
    },
    addToFavorite(id) {
      console.log('addToFavorite', id)
      const add = !this.isLiked(id)
      const experiences = add
        ? this.favoriteIDs?.push(id)
        : this.favoriteIDs?.pop(id)

      this.$apollo
        .mutate({
          mutation: mutateUser,
          variables: {
            id: this.$strapi.user.id,
            input: {
              favorite: {
                experiences,
              },
            },
          },
        })
        .catch((err) => {
          console.error(err)
        })
    },
    photo(experience) {
      const photos = experience.photos
      if (!photos?.length) return
      return this.url + photos[0].formats.thumbnail.url
    },
  },
}
</script>
