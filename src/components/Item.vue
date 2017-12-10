<template>
  <li class="news-item">
      <div class="top">
        <span class="avatar">
          <img v-if="item.user && item.user.avatar" :src="item.user.avatar" alt="">
          <img v-else src="http://upload.jianshu.io/users/upload_avatars/8701720/d2881dc0-39fc-4f8b-812d-7081974215dd.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="">
        </span>
        <span class="username">
          {{item.user && item.user.nickname ? item.user.nickname : "设计杂货店"}}
        </span>
        <span class="publishTime">
          12小时前
        </span>
      </div>
      <div class="title">
        <router-link :to="'/article/' + item._id">{{item.title}}</router-link>
      </div>
      <div class="content" v-html="item.shortContent">
        
      </div>
      <div class="operates">
        <span v-for="classify in item.classify">
          <a class="collection-tag">{{classify}}</a>
        </span>
        <span>
          <i class="fa fa-eye" aria-hidden="true"></i> {{item.see}}
        </span>
        <span>
          <i class="fa fa-heart" aria-hidden="true"></i> {{item.like}}
        </span>
      </div>
  </li>
</template>

<script>
export default {
  name: 'news-item',
  props: ['item']
}
</script>

<style scoped>
.collection-tag {
    display: inline-block;
    padding: 3px 6px;
    margin-top: -1px;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1;
    vertical-align: middle;
    color: #ea6f5a!important;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 3px;
}
.operates span {
  margin-right: 10px;
  color: #b4b4b4;
  font-size: 12px;
  cursor: pointer;
}
.operates span,
.operates span:hover {
  -webkit-transition: .1s ease-in;
  -moz-transition: .1s ease-in;
  -o-transition: .1s ease-in;
  -ms-transition: .1s ease-in;
}
.operates span:hover {
  color: #787878;
  transition: .1s ease-in;
}
.news-item {
  border-bottom: 1px solid #f0f0f0;
  padding: 10px 0;
}
.news-item > div {
  padding: 5px 0px;
}
.top {
  font-size: 12px;
}
.top > span {
  margin-right: 10px;
}
.avatar {
  width: 32px;
  height: 32px;
  display: inline-block;
  vertical-align: middle;
}
.avatar img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.publishTime {
  color: #969696;
}
.title a {
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    cursor: pointer;
}
.title a:hover {
  text-decoration: underline;
}
.content {
  font-size: 14px;
    font-size: 13px;
    line-height: 24px;
}
</style>
