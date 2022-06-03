export const state = () => ({
  subPages: null,
})

export const getters = {
  getSubPages(state){
    return state.subPages
  }
}

export const actions = {

  async getSubPagesActions({ commit }, id){
        commit('SAVE_GUIDE', id)
    },
}

export const mutations = {
  SAVE_GUIDE (state, data){
    state.subPages += data
  },
}
