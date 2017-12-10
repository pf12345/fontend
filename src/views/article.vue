<template>
	<div id="article" v-if="article">
		<h1 class="title">{{article.title}}</h1>
		<div class="userInfo">
			<div v-if="article.user">
				<img :src="article.user.avatar" alt="">
			</div>
			<div class="info" >
				<div v-if="article.user">{{article.user.nickname}}</div>
				<div>
					<span>{{article.created}}</span>
					<span>阅读 {{article.see}}</span>
					<span>喜欢 {{article.like}}</span>
				</div>
			</div>
		</div>
		<div v-html="article.richContent">
			
		</div>
	</div>
</template>
<script>
	export default {
		created() {
			this.$store.dispatch('FETCH_ONE_ARTICLE', this.$store.state.article_id);
		},
		asyncData ({ store, route: { params: { id }}}) {
		    return store.commit('SET_ARTICLE_ID', id)
		  },
		computed: {
			article () {
				return this.$store.state.article;
			}
		},
		mounted() {
			
		},
		watch: {
			'article':{
				handler() {
					this.$nextTick(function () {
					    $(document).ready(function() {
						  $('pre code').each(function(i, block) {
						    hljs.highlightBlock(block);
						  });
						});
					  })
				}
			}
		}
	}
</script>
<style scoped>
	#article {
		padding-top: 75px;
		padding-bottom: 60px;
	}
	
	#article .title {
		font-size: 22px;
		margin-bottom: 10px;
		text-align: center;
		font-weight: bold;
	}
	.userInfo img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
	}
	.userInfo {
		display: flex;
		margin-bottom: 20px;
	}
	.info span {
		margin-right: 10px;
		font-size: 12px;
    	color: #969696;
	}
	.info div {
		margin: 5px 10px;
	}
</style>