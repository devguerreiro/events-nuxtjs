import { INCREMENT_SUPPORTERS, SET_SUPPORTERS_COUNTER } from './mutation-types'

const countApiURL = "https://api.countapi.xyz"
const namespace = "eventsnuxtjs.vercel.app"
const key = "supporters"

export const state = () => ({
  counter: 0,
  supported: false,
})

export const mutations = {
  [INCREMENT_SUPPORTERS](state) {
    if (!state.supported) {
      state.counter++
      state.supported = true
    }
  },
  [SET_SUPPORTERS_COUNTER](state, value) {
    state.counter = value
  }
}

export const getters = {
  counter: state => state.counter,
}

export const actions = {
  getCounter: async ({commit}) => {
    await fetch(`${countApiURL}/get/${namespace}/${key}`)
      .then(response => response.json())
      .then(({value}) => commit(SET_SUPPORTERS_COUNTER, value))
      .catch(e => console.log(e.message))
  },
  incrementCounter: async ({commit, state}) => {
    if (!state.supported) {
      await fetch(`${countApiURL}/hit/${namespace}/${key}`)
      .then(() => commit(INCREMENT_SUPPORTERS))
      .catch(e => console.log(e.message))
    }
  }
}
