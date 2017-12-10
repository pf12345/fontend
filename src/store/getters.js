export default {
  activeClassifyOptions(state) {
    const { classifyOptions } = state;
    return classifyOptions;
  },
  activeArticleList(state) {
  	return state.articleList;
  },
  activeUser(state) {
  	return state.user;
  }
}
