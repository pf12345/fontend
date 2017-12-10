import {
  fetchArticleList,
  fetchAddArticle,
  fetchLogin,
  fetchRegister,
  fetchCurrentUser,
  fetchOneArticle
} from '../api'

export default {
	FETCH_ARTICLE_LIST: ({ commit, state }, data) => {
		return fetchArticleList(data).then(res => {
			commit('SET_ARTICLE_LIST', res.data);
		})
	},
	FETCH_ARTICLE_ADD: ({ commit, state }, info) => {
		return fetchAddArticle(info);
	},
	FETCH_REGISTER: ({ commit, state }, user) => {
		return fetchRegister(user);
	},
	FETCH_LOGIN: ({ commit, state }, user) => {
		return fetchLogin(user);
	},
	FETCH_CURRENT_USER: ({ commit, state }) => {
		return fetchCurrentUser();
	},
	FETCH_ONE_ARTICLE: ({ commit, state }, id) => {
		return fetchOneArticle(id).then((res) => {
			if(res.data.result === 'TRUE') {
				commit('SET_ARTICLE', res.data.data);
			}
		}).catch((e) => {
			// console.log(e);
		});
	}
}
