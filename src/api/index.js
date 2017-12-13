// this is e in webpack config based on server/client build
import axios from 'axios';
const config = require('./../../config/config.json')['fontEnd'];

const logRequests = !!process.env.DEBUG_API
const domain = config.domain;

//method: post or get
function fetch(method, url, data) {
  return axios({
    method: method,
    url: url,
    data: data || {}
  });
}

export function fetchAddArticle (data) {
  return fetch('post', `${domain}/query/addArticle`, data);
}

export function fetchArticleList (data) {
	return fetch('post', `${domain}/query/articleList`, data);
}

export function fetchRegister (user) {
	return fetch('post', `${domain}/query/register`, user);
}

export function fetchLogin (user) {
	return fetch('post', `${domain}/query/login`, user);
}

export function fetchCurrentUser() {
	return fetch('post', `${domain}/query/currentUser`);
}

export function fetchOneArticle(_id) {
  return fetch('post', `${domain}/query/singleArticle`, {_id: _id});
}