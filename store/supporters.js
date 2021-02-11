import { ADD_SUPPORTER } from './mutation-types'

export const state = () => ({
  counter: 0,
  supported: false,
})

export const mutations = {
  [ADD_SUPPORTER](state) {
    if (!state.supported) {
      state.counter++
      state.supported = true
    }
  },
}

export const getters = {
  counter: (state) => state.counter,
}
