<template>
  <b-modal id="modal-edit-form" centered hide-footer content-class="shadow" :title="$t('ModalEditForm')">
    <b-form @submit="onSubmit" v-if="getNoteById !== null" >
      <b-form-group
        id="input-group-3"
        :label="$t('TypeOfEquipment')"
        label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="TypeOfEquipment"
          :options="base"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        :label="$t('SerialNumber')"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="SerialNumber"
          :placeholder="$t('CompleteTheField')"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        :label="$t('Note')"
        label-for="input-2"
      >
        <b-form-textarea
          id="input-2"
          v-model="Note"
          :placeholder="$t('CompleteTheField')"
          required
        ></b-form-textarea>
      </b-form-group>

        <div class="form-buttons">
          <b-button type="submit" variant="primary">{{ $t('Submit') }}</b-button>
          <b-button @click="reset()" variant="danger"> {{ $t('Reset') }} </b-button>
        </div>
    </b-form>

    <b-spinner v-else class="spinner" />
  </b-modal>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "ModalEditForm",

  data() {
    return {
      TypeOfEquipment: null,
      SerialNumber: '',
      Note: '',
    }
  },

  props: {
    modalId: String,
    noteById: Number,
  },

  computed: {
    ...mapGetters('dropdownData',['getDropdownData']),
    ...mapGetters('Forms',['getNoteById']),
    base(){
      return [{ text: this.$t('SelectField'), value: null }, ...this.getDropdownData]
    },
  },

  watch: {
    getNoteById(newData){
        this.TypeOfEquipment = this.getNoteById?.TypeOfEquipment,
        this.SerialNumber = this.getNoteById?.SerialNumber,
        this.Note = this.getNoteById?.Note
    }
  },

  methods: {
    ...mapActions('dropdownData',['getDropdownDataAction']),
    ...mapActions('Forms',['editNote']),


    onSubmit(event) {
      event.preventDefault()
      this.editNote( {
        id:this.noteById,
        data: {
          TypeOfEquipment: this.TypeOfEquipment,
          SerialNumber: this.SerialNumber,
          Note: this.Note
        }
      })
      this.reset()
      this.$bvModal.hide(this.modalId)
    },


    reset() {
      this.SerialNumber = ''
      this.Note = ''
      this.TypeOfEquipment = null
    }
  },

  created() {
    this.getDropdownDataAction()
  }
}
</script>

<style scoped>
.spinner{
  flex: 1;
  margin-left: 45%;
}
.form-buttons{
  display: flex;
  justify-content: right;
  gap: 7px;
}
</style>
