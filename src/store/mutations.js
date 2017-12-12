import Vue from 'vue'

export default {
  SET_ARTICLE_LIST: (state, list) => {
    state.articleList = list;
  },

  SET_USER: (state, user) => {
    state.user = user;
  },

  SET_ARTICLE: (state, article) => {
  	state.article = article;
  }
}
