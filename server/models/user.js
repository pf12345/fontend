var BaseModel = require('../baseModel.js');
var model  = new BaseModel();

var _Schema = new model.Schema({
    nickname: String, //用户名称
    password: String, //密码
    created: String, //创建时间
    modified:String,
    avatar: String, //头像地址
    phone: String,
    email: String
},{versionKey: false});

model.schema =  model.mongoose.model('user', _Schema);

module.exports = model;