<template>
	<header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img class="logo" src="~public/logo-48.png" alt="logo">
        </router-link>
        <router-link to="/">首页</router-link>
        <!-- <router-link class="right add" to="/add">写文章</router-link> -->
        <!-- <router-link v-if="!user || !user._id" class="right" to="/register">注册</router-link> -->
        <!-- <router-link v-if="!user || !user._id" class="right" to="/login">登录</router-link> -->
      </nav>
    </header>
</template>
<script>
  export default {
    props: ['user']
  }
</script>
<style lang="stylus">
.add
  height: 40px;
  display: inline-block;
  padding: 0 20px;
  background: #f60;
  line-height: 40px !important;
  border: 1px solid #fff;
  border-radius: 20px;
  position: relative;
  top: -7px;
  margin: 0 !important;
  font-weight: 900 !important
  transition: .1s ease-in;
  -webkit-transition: .1s ease-in;
  -moz-transition: .1s ease-in;
  -o-transition: .1s ease-in;
  -ms-transition: .1s ease-in;

.add:hover 
    background: rgba(255, 255, 255, 0.2) !important;

.header
  background-color #ff6600
  position fixed
  z-index 999
  height 55px
  top 0
  left 0
  right 0
  .inner
    max-width 800px
    box-sizing border-box
    margin 0px auto
    padding 15px 5px
  a
    color rgba(255, 255, 255, .8)
    line-height 24px
    transition color .15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    letter-spacing .075em
    margin-right 1.8em
    &:hover
      color #fff
    &.router-link-active
      color #fff
      font-weight 400
    &:nth-child(6)
      margin-right 0
  .github
    color #fff
    font-size .9em
    margin 0
    float right

.logo
  width 24px
  margin-right 10px
  display inline-block
  vertical-align middle

@media (max-width 860px)
  .header .inner
    padding 15px 30px

@media (max-width 600px)
  .header
    .inner
      padding 15px
    a
      margin-right 1em
    .github
      display none
</style>