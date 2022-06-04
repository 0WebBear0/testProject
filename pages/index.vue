<template>
  <div class="row flex-column base-template">
    <b-btn v-b-modal.modal-add-form>{{$t('Add')}}</b-btn>

    <div class="mt-3">
      <Card type-of-equipment="test" serial-number="stest"/>
    </div>

    <b-modal id="modal-add-form" centered hide-footer content-class="shadow" :title="$t('ModalAddForm')">
      <ModalAddForm/>
    </b-modal>

<!--    <b-btn @click="getSubPagesActions('059')">sadasdas</b-btn>-->
<!--    <div>{{getSubPages}}</div>-->
  </div>
</template>

<script >
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import Card from "~/components/UI/Card/Card";
import ModalAddForm from "~/components/UI/Modals/ModalAddForm";
export default {
  name: 'IndexPage',

  components: {ModalAddForm, Card},


  computed: {
    ...mapGetters('test', ['getSubPages'])
  },

  methods: {
    ...mapActions('test',['getSubPagesActions'])
  },

}
</script>

<style>
.base-template{
  display: flex;
  gap: 10px;
}
</style>
