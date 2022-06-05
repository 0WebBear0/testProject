import {backDomain, searchWithBack, withBack} from "~/MainConstants";

export const state = () => ({
  notes: [],
  notesFinding: null,
  noteById: null,
})

export const getters = {
  getNotes(state){
    return state.notes
  },

  notesNotEmpty(state){
    if (state.notes.length !== 0){
      return true
    }
    else return false
  },

  getNoteById(state){
    return state.noteById
  },

  getNoteFinding(state){
    return state.notesFinding
  }
}

export const actions = {

  async addFormAction({ commit }, data){
    if (withBack){
      this.$axios.$post(backDomain + "api/equipment")
        .then((res)=>{
          commit('SAVE_NOTE', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    else commit('SAVE_NOTE', data)
  },

  async getNotesAction({ commit }, data){
    if (withBack){
      this.$axios.$get(backDomain + "api/equipment", data)
        .then((res)=>{
          commit('GET_NOTES', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    else commit('GET_NOTES', data)
  },

  async deleteNote({ commit },id) {
    if (withBack){
      this.$axios.$delete(backDomain + "api/equipment/" + id?.GetterID)
        .then((res)=>{
          commit('DELETE_NOTE', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    else commit('DELETE_NOTE', id)
  },

  async editNote({ state, commit },{id: id, data: data}) {
    if (withBack){
      this.$axios.$put(backDomain + "api/equipment/" + id?.GetterID, data)
        .then((res)=>{
          commit('EDIT_NOTE', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    else commit('EDIT_NOTE', {id: id, data: data})
  },

  async getNoteByIdAction({state, commit }, id) {
    if (withBack){
      this.$axios.$get(backDomain + "api/equipment/" + state.notes[id]?.GetterID)
        .then((res)=>{
          commit('GET_NOTE_BY_ID', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    else commit('GET_NOTE_BY_ID', state.notes[id])
  },

  async searchNoteBySerialNumber({state, commit}, keyWord){
    if (searchWithBack){
      this.$axios.$get(backDomain + "api/equipment/search?keyWord=" + keyWord)
        .then((res)=>{
          commit('SEARCH', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    else {
      let data = []

      for (let i = 0; i < state.notes.length; i++) {
        if (state.notes[i].SerialNumber === keyWord){
          data.push(state.notes[i])
        }
      }
      if (keyWord === ""){
        commit( 'SEARCH', null )
      }
      else commit( 'SEARCH', data )
    }
  },
  async searchNoteByTypeOfEquipment({state, commit}, keyWord){
    if (searchWithBack){
      this.$axios.$get(backDomain + "api/equipment/search?keyWord=" + keyWord)
        .then((res)=>{
          commit('SEARCH', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    else {
      let data = []

      for (let i = 0; i < state.notes.length; i++) {
        if (state.notes[i].TypeOfEquipment === keyWord){
          data.push(state.notes[i])
        }
      }
      if (keyWord === ""){
        commit( 'SEARCH', null )
      }
      else commit( 'SEARCH', data )
    }
  }

}

export const mutations = {
  GET_NOTES(state, data){
    if (withBack){
      state.notes = data
    }
    else state.notes = [
      {"TypeOfEquipment":"test","SerialNumber":"a","Note":"ds"},
      {"TypeOfEquipment":"test","SerialNumber":"b","Note":"ds"},
      {"TypeOfEquipment":"test","SerialNumber":"c","Note":"ds"},
      {"TypeOfEquipment":"test","SerialNumber":"d","Note":"ds"}
    ]
  },

  SAVE_NOTE (state, data){
    state.notes.unshift(data)
  },

  SAVE_LAST_KEYWORD (state, keyword){
    state.lastKeyWord = keyword
  },

  DELETE_NOTE(state, id){
    state.notes.splice(id,1)
  },

  EDIT_NOTE(state, data){
    state.notes.splice(data.id,1, data.data)
  },

  GET_NOTE_BY_ID(state, data){
    state.noteById = data
  },

  SEARCH (state, data){
    state.notesFinding = data
  }
}
