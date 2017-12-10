import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      classifyOptions: ['Vue', 'React', 'Angular', '其他', '随笔'],
      articleList: [],
      user: {},
      article: null,
      article_id: ''
    },
    actions,
    mutations,
    getters
  })
}
