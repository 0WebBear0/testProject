<template>
  <div class="row flex-column base-template">
    <b-btn v-b-modal.modal-add-form>{{$t('Add')}}</b-btn>

    <div v-if="getNoteFinding !== null && base === false">
      <div class="text-center">{{$t('SearchInProgress')}}</div>
      <div v-if="getNoteFinding.length !== 0 " class="mt-3 gap">
        <Card
          v-for="(notes, counter) in getNoteFinding"
          :key="counter"
          :getters-id="counter.toString()"
          :type-of-equipment="notes.TypeOfEquipment"
          :serial-number="notes.SerialNumber"
          @edit="editCard"
          @delete="deleteCard"
        />
      </div>

      <div class="mt-3 text-center" v-else>
        {{ $t('NotesIsNotFound') }}
      </div>
    </div>

    <div v-else>
      <div v-if="notesNotEmpty" class="mt-3 gap">
        <Card
          v-for="(notes, counter) in getNotes"
          :key="counter"
          :getters-id="counter.toString()"
          :type-of-equipment="notes.TypeOfEquipment"
          :serial-number="notes.SerialNumber"
          @edit="editCard"
          @delete="deleteCard"
        />
      </div>
      <div class="mt-3 text-center" v-else>
        {{ $t('NotesIsEmpty') }}
      </div>

    </div>
    <ModalAddForm modal-id="modal-add-form"/>
    <ModalEditForm :note-by-id="noteById" modal-id="modal-edit-form"/>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import Card from "~/components/UI/Card/Card";
import ModalAddForm from "~/components/UI/Modals/ModalAddForm";
import ModalEditForm from "~/components/UI/Modals/ModalEditForm";

export default {
  name: 'IndexPage',

  data(){
    return {
      noteById: null,
      base: false
    }
  },

  components: {ModalEditForm, ModalAddForm, Card},

  computed: {
    ...mapGetters('Forms', ['notesNotEmpty','getNotes','getNoteFinding'])
  },

  methods: {
    ...mapActions('Forms',['getNotesAction', 'deleteNote', 'editNote', 'getNoteByIdAction']),

    editCard(id){
      this.getNoteByIdAction(id)
      this.noteById = id
      this.$bvModal.show('modal-edit-form')

    },

    deleteCard(id){
      this.deleteNote(id)
    }
  },

  mounted() {
    this.getNotesAction({Start:0, End:40})
  }

}
</script>

<style>
.base-template{
  display: flex;
  gap: 10px;
}
.gap{
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: clamp(5px, 2vw, 10px);
}
</style>
