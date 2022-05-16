<template>
    <v-app-bar class="nav-bar">
        <v-tabs center center-active class="justify-center">

            <v-spacer></v-spacer>
            <v-tab class="ma-4">
                <NuxtLink to="/guideexperiences">
                {{ $t('Publier une annonce') }}
                </NuxtLink>
            </v-tab>

            <v-tab class="ma-4">
                {{ $t('Voir vos annonces') }}
            </v-tab>

            <v-tab class="ma-4">
                {{ $t('Votre calendrier') }}
            </v-tab>

            <v-tab class="ma-4">
                {{ $t('Messagerie') }}
            </v-tab>
            <v-spacer></v-spacer>


            <v-tab-item >
            </v-tab-item >

            <v-tab-item >
                <v-container>
                    <guide-experiences>
                    </guide-experiences>
                </v-container>
            </v-tab-item >

            <v-tab-item >
                <calendar></calendar>
            </v-tab-item >

            <v-tab-item >
                <chat>
                </chat>
            </v-tab-item>
        </v-tabs>
    </v-app-bar>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    mounted () {this.load()},
    methods: mapActions({load:'guide/load'})
}

</script>

<style lang="scss" scoped>

.v-app-bar * {
  font-weight: bold;
  color: $white !important;
}

.nav-bar {
    background: $_blue !important;
    background-color: $_blue !important;
}
</style>
