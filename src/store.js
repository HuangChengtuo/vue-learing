import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    goods: [
      {
        id: 0,
        name: 'Redmi K20',
        price: 1999,
        img: require('@/assets/logo.png'),
        quantity: 0
      },
      {
        id: 1,
        name: 'Redmi K20 Pro',
        price: 2499,
        img: require('@/assets/logo.png'),
        quantity: 0
      },
      {
        id: 2,
        name: 'OnePlus 7 Pro',
        price: 3999,
        img: require('@/assets/logo.png'),
        quantity: 0
      },
    ],
    totalPrice: 0,
    totalQuantity: 0
  },
  getters: {
    getGoods(state) {
      return state.goods
    }
  },
  mutations: {
    addItem(state, id) {
      state.goods[id].quantity++;
      state.totalQuantity++;
      state.totalPrice += state.goods[id].price
    },
    removeItem(state, id) {
      if (state.goods[id].quantity > 0) {
        state.goods[id].quantity--;
        state.totalQuantity--;
        state.totalPrice -= state.goods[id].price
      }
    }
  },
  actions: {
    incrementLater({commit}, i) {
      setTimeout(() => {
        commit('increment', i)
      }, 1000)
    }
  }
})
