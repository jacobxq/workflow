import * as types from './mutation-type'

const mutation = {
  [types.TEST](state, test) {
    state.test = test
  }
}

export default mutation