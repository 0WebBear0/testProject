import {backDomain, withBack} from "~/MainConstants";

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
          commit("SAVE_DATA", err)
        })
    }
    else commit("SAVE_DATA")
  },
}

export const mutations = {
  SAVE_DATA (state, data){
    if (withBack){
      state.dropdownData = data
    }
    else state.dropdownData = ["test","Api не подключён","test"]
  },
}
