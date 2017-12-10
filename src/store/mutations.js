import Vue from 'vue'

export default {
  SET_ARTICLE_LIST: (state, list) => {
    state.articleList = list;
  },

  SET_USER: (state, user) => {
    state.user = user;
  },
  SET_ARTICLE_ID: (state, id) => {
  	state.article_id = id;
  },

  SET_ARTICLE: (state, article) => {
  	state.article = article;
  }
}
