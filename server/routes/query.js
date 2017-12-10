var express = require('express');
var router = express.Router();
var moment = require('moment');
var crypto = require("crypto");
require('./../mongoose');
var Articles = require('../models/articles');
var User = require('../models/user');

router.post('/articleList', function(req, res) {
	var limit = req.body.limit?parseInt(req.body.limit):50;
    var page = req.body.page?parseInt(req.body.page):1;
    var skip = limit* (page-1);
	Articles.schema.find({}).sort({created: -1}).skip(skip).limit(limit).execAsync()
	.then((list) => {
		res.send(list)
	})
	.catch(ex => {
		if (ex.code && ex.message) {
			res.send(`{"result":"FALSE","msg":${ex.message}}`);
		} else {
			res.send(`{"result":"FALSE"}`);
		}
	});
})

router.post('/addArticle', function(req, res) {
	var now = moment().format('YYYY-MM-DD HH:mm:ss');
	var content = req.body.richContent;
	var shortContent = content ? content.replace(/<[^>]+>/g,"") : '';
	shortContent = shortContent.length > 200 ? shortContent.slice(0, 200) + '......' : shortContent;
	let info = {
		title: req.body.title,
		classify: req.body.classify,
		richContent: req.body.richContent,
		shortContent: shortContent,
		created: now,
		like: 0,
		comments: 0,
		modified: now,
		see: 0,
		user: req.body.user || {
			nickname: "官方",
			avatar: '/public/images/avatar.png'
		}
	}
	
	var article = new Articles.schema(info)
	article.save().then((data) => {
		res.send({
			result: 'TRUE',
			data: data
		});
	})
	.catch(ex => {
		if (ex.code && ex.message) {
			res.send(`{"result":"FALSE","msg":${ex.message}}`);
		} else {
			res.send(`{"result":"FALSE"}`);
		}
	});
})

router.post('/singleArticle', function(req, res) {
	var postId = req.body._id;
	Articles.schema.findOne({_id: postId}).execAsync()
	.then((data) => {
		if(data) {
			data.modified = moment().format('YYYY-MM-DD HH:mm:ss');
			data.see += 1;
            data.save();
			res.send({
				result: 'TRUE',
				data: data
			})
		} else {
			res.send({
				result: 'FALSE',
				message: '无相关数据'
			})
		}
		
	})
	.catch(ex => {
		if (ex.code && ex.message) {
			res.send(`{"result":"FALSE","msg":${ex.message}}`);
		} else {
			res.send(`{"result":"FALSE"}`);
		}
	});
})

router.post('/register', function(req, res) {
	var now = moment().format('YYYY-MM-DD HH:mm:ss');
	var userName = req.body.userName;
	var password = req.body.password;
	var md5 = crypto.createHash("md5");
	var newPas = md5.update(password).digest("hex");
	var _user = {
		nickname: userName,
		password: newPas,
		created: now,
		modified: now,
		avatar: '/public/images/avatar.png',
		phone: '',
		email: ''
	}

	var user = new User.schema(_user);
	user.save().then((data) => {
		if(data.hasOwnProperty('password')) {
			delete data['password'];
		}
		req.session.user = data;
		res.send({
			result: 'TRUE',
			data: data,
			message: '注册成功'
		})
	})
	.catch(ex => {
		console.log(ex);
		if (ex.code && ex.message) {
			res.send(`{"result":"FALSE","msg":${ex.message}}`);
		} else {
			res.send(`{"result":"FALSE"}`);
		}
	});
})

router.post('/login', function(req, res) {
	var userName = req.body.userName;
	var password = req.body.password;
	var md5 = crypto.createHash("md5");
	var newPas = md5.update(password).digest("hex");
	User.schema.find({nickname: userName}).execAsync()
	.then((user) => {
		if(user && user[0] && user[0].password == newPas) {
			if(user[0].hasOwnProperty('password')) {
				delete user[0]['password'];
			}
			req.session.user = user[0];
			res.send({
				result: 'TRUE',
				message: '登录成功',
				data: user[0]
			})
		} else {
			res.send({
				result: 'FALSE',
				message: !user || !user[0] ? '帐号未注册' : '用户与密码不一致'
			})
		}
	})
	.catch(ex => {
		if (ex.code && ex.message) {
			res.send(`{"result":"FALSE","msg":${ex.message}}`);
		} else {
			res.send(`{"result":"FALSE"}`);
		}
	});
})

router.post('/currentUser', function(req, res) {
	if(req.session && req.session.user) {
		res.send({
			result: 'TRUE',
			data: req.session.user
		})
	} else {
		res.send({
			result: 'FALSE',
			data: {},
			message: '未登录'
		})
	}
})

module.exports = router;