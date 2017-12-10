// this is e in webpack config based on server/client build
import axios from 'axios';

const logRequests = !!process.env.DEBUG_API
const domain = 'http://localhost:8010'

//method: post or get
function fetch(method, url, data) {
  return axios({
    method: method,
    url: url,
    data: data || {}
  });
}

export function fetchAddArticle (data) {
  return fetch('post', `/query/addArticle`, data);
}

export function fetchArticleList (data) {
	return fetch('post', '/query/articleList', data);
}

export function fetchRegister (user) {
	return fetch('post', '/query/register', user);
}

export function fetchLogin (user) {
	return fetch('post', '/query/login', user);
}

export function fetchCurrentUser() {
	return fetch('post', '/query/currentUser');
}

export function fetchOneArticle(_id) {
  return fetch('post', `/query/singleArticle`, {_id: _id});
}