import * as types from './mutation-type'

export const selectTest = function ({commit, state}, {test}) {
  commit(types.TEST, test)
}