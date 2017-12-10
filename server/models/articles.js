var BaseModel = require('../baseModel.js');
var model  = new BaseModel();

var _Schema = new model.Schema({
    title: String, //文章title
    richContent: String, //文章内容
    shortContent: String, //文章简介
    classify: Array, //文章分类
    created: String, //创建时间
    like: Number, //点赞数
    comments: Number, //评论数
    see: Number,
    modified:String,
    user: Object
},{versionKey: false});

model.schema =  model.mongoose.model('articles', _Schema);

module.exports = model;