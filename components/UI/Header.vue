<template>
  <div>
    <b-navbar toggleable="lg" class="px-2" type="dark" variant="info">
      <b-navbar-brand @click="searchNoteBySerialNumber('')">{{ $t("Home") }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              :placeholder="$t('Search')"
              v-model="keyWord"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0 mr-2" @click="searchNoteBySerialNumber(keyWord)">{{ $t('SearchBySerialNumber') }}</b-button>
            <b-button size="sm" class="my-2 my-sm-0" @click="searchNoteByTypeOfEquipment(keyWord)">{{ $t('SearchByTypeOfEquipment') }}</b-button>
          </b-nav-form>

          <b-nav-item-dropdown :text="$i18n.locale" right>
            <b-dropdown-item href="/en"><nuxt-link :to="switchLocalePath('en')">en</nuxt-link></b-dropdown-item>
            <b-dropdown-item href="/ru"><nuxt-link :to="switchLocalePath('ru')">ru</nuxt-link></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Header",

  data(){
    return{
      keyWord: null
    }
  },

  methods:{
    ...mapActions('Forms',['searchNoteBySerialNumber','searchNoteByTypeOfEquipment'])
  },


}
</script>

<style scoped>

</style>
