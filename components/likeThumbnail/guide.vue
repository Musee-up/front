<template>
  <like-overview
    v-if="photo"
    :link="link"
    :width="width"
    :photo="photo(guide)"
    :color="isLiked(guide.id) ? 'red' : 'white'"
    :action="() => addToFavorite(guide.id)"
  >
    <slot></slot>
  </like-overview>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { verticalWidth } from '@/tools/photos.js'
import mutateUser from '@/graphql/mutations/me'
import Guide from '@/types/Guide'

export default {
  props: {
    guide: {
      type: Guide,
      required: true,
    },
    link: {
      type: String,
      default: '/guides/',
    },
  },
  computed: {
    ...mapGetters({
      favorites: 'user/getFavorites',
    }),
    favoriteIDs: {
      get() {
        return this.favorites?.guides.data.map((favorite) => favorite.id) || []
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
      const add = !this.isLiked(id)
      const guides = add
        ? this.favoriteIDs?.push(id)
        : this.favoriteIDs?.pop(id)

      this.$apollo
        .mutate({
          mutation: mutateUser,
          variables: {
            id: this.$strapi.user.id,
            input: {
              favorite: {
                guides,
              },
            },
          },
        })
        .catch((err) => {
          console.error(err)
        })
    },
    photo(guide) {
      return this.url + guide.user.picture.formats.thumbnail.url
    },
  },
}
</script>
