<template>
  <div>
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid amet consequatur ea enim in labore
      libero maiores molestiae necessitatibus nemo omnis quam, quod quos suscipit vel voluptates. Quasi, quis.
    </div>
    <b-btn @click="getSubPagesActions('sadsa')">sadasdas</b-btn>
    <div>{{getSubPages}}</div>
  </div>
</template>

<script >
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'IndexPage',

  methods: {
    ...mapActions('test',['getSubPagesActions'])
  },

  computed: {
    ...mapGetters('test', ['getSubPages'])
  }
}
</script>
