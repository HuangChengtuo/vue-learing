import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    count: 6
  },
  getters: {
    getCount(state) {
      return state.count
    }
  },
  mutations:{
    increment (state,i) {
      // 变更状态
      state.count+=i
    }
  }
})
