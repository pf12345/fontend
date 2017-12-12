<template>
	<div class="news-view view">
		<div class="news-list">
			<ul>
				<template v-for="item in items"  >
					<item :item="item"></item>
				</template>
	  		</ul>
		</div>
		<a v-if="items.length == page * limit" data-page="3" href="/" class="load-more">阅读更多</a>

    {{test}}
	</div>

</template>

<script>
	import item from './../components/Item.vue'
	export default {
		data() {
			return {
				items: this.$store.getters.activeArticleList
			}
		},
		components: {
			item,
		},
    asyncData ({ store, route: { params: { id }}}) {
      return store.dispatch('FETCH_ARTICLE_LIST', {
        page: store.state.page,
        limit: store.state.limit
      });
    },
    computed: {
      items() {
        return this.$store.getters.activeArticleList;
      }
    },
    beforeMount() {
      
    },
    created() {
      
    },
    mounted() {
      	
    },
    methods: {
      
    }
	}
</script>
<style scoped>
.load-more {
		width: 100%;
		margin: 30px auto 60px;
		padding: 10px 0;
		text-align: center;
		font-size: 15px;
		border-radius: 20px;
		color: #fff;
		background-color: #a5a5a5;
		display: block;
}
</style>
<style lang="stylus">

.news-list-nav, .news-list
  border-radius 2px

.news-list-nav
  padding 15px 30px
  position fixed
  text-align center
  top 55px
  left 0
  right 0
  z-index 998
  box-shadow 0 1px 2px rgba(0,0,0,.1)
  a
    margin 0 1em
  .disabled
    color #ccc

.news-list
  padding 55px 0 0
  width 100%
  transition all .5s cubic-bezier(.55,0,.1,1)
  ul
    list-style-type none
    padding 0
    margin 0

.slide-left-enter, .slide-right-leave-to
  opacity 0
  transform translate(30px, 0)

.slide-left-leave-to, .slide-right-enter
  opacity 0
  transform translate(-30px, 0)

.item-move, .item-enter-active, .item-leave-active
  transition all .5s cubic-bezier(.55,0,.1,1)

.item-enter
  opacity 0
  transform translate(30px, 0)

.item-leave-active
  position absolute
  opacity 0
  transform translate(30px, 0)

@media (max-width 600px)
  .news-list
    margin 10px 0
</style>
