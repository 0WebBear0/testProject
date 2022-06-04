import {backDomain} from "~/MainConstants";

export const state = () => ({
  dropdownData: [],
})

export const getters = {
  getDropdownData(state){
    return state.dropdownData
  }
}

export const actions = {

  async getDropdownDataAction({ state, commit }){

    if(state.dropdownData.length === 0){
      this.$axios.$get(backDomain + "/getTypeOfEquipment")
        .then((res) =>{
          commit("SAVE_DATA", res.data)
        })
        .catch((err) => {
          console.log(err)
          commit("SAVE_DATA", res.data)
        })
    }
    else commit("SAVE_DATA", res.data)
  },
}

export const mutations = {
  SAVE_DATA (state, data){
    state.dropdownData.push("asd","asdasd","asdas")
    // state.dropdownData = data
  },
}
