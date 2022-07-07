<template>
  <v-col cols="3">
    <v-list>
      <v-list-item>
        {{ $t('Abonnez vous a la newsletter!') }}
      </v-list-item>
      <v-list-item>
        <v-row>
          <v-col>
            <v-text-field
              filled
              solo
              rounded
              hide-details="auto"
              prepend-inner-icon="mdi-email"
              type="email"
              color="$white"
              class="description--text"
              label="Écrivez votre mail ici..."
            ></v-text-field>
          </v-col>

          <v-col>
            <base-blue-button>
              {{ $t("S'abonner") }}
            </base-blue-button>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </v-col>
</template>
