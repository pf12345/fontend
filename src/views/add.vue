<template>
	<div>
		<div id="addArticle">
			<Form label-position="top">
		        <FormItem label="文章标题">
		            <Input v-model="addInfo.title"></Input>
		        </FormItem>
		        <FormItem label="文章分类">
		            <Select v-model="addInfo.classify" multiple>
				        <Option v-for="item in classifyOptions" :value="item" :key="item">{{ item }}</Option>
				    </Select>
		        </FormItem>
		        
		        <FormItem label="文章内容">
		            <div id="editor">

					</div>
		        </FormItem>
		    </Form>
			
			<div id="footer">
				<!-- <Button type="success" long>提交</Button> -->
				<Button type="primary" long :loading="loading" @click="publishArticle">
			        <span v-if="!loading">提交</span>
			        <span v-else>提交...</span>
			    </Button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				editor: null,
				addInfo: {
					title: '',
					classify: [],
					richContent: ''
				},
				loading: false,
				classifyOptions: this.$store.getters.activeClassifyOptions
			}
		},
		mounted() {
			$(() => {
				let height = $(window).height() - 120;
				let editor = editormd("editor", {
	              width   : "100%",
	              saveHTMLToTextarea : true,
	              height  : height,
	              syncScrolling : "single",
	              emoji : false,
	              path    : "../public/editormd/lib/",
	              toolbarIcons : function() {
		            return ["undo", "redo", "bold", "quote", "del", "italic", "h1","h2","h3","h4","h5", "images", "link", "list-ul", "list-ol", "code", "code-block", "watch", "fullscreen", "html-entities", "clear"]
		        },
		        toolbarIconsClass: {
		        	images: 'fa-picture-o'
		        },
		        toolbarHandlers: {
		        	images: function(cm, icon, cursor, selection) {
		        		//var cursor    = cm.getCursor();     //获取当前光标对象，同cursor参数
                		//var selection = cm.getSelection();  //获取当前选中的文本，同selection参数

                		console.log(cm)
		        	},
		        	fullscreen: function() {
		        		alert(1)
		        	}
		        }
	          });
				this.editor = editor;
			})
		},
		methods: {
			publishArticle() {
				this.loading = true;
				this.addInfo.richContent = this.editor.getHTML();
				this.addInfo.user = this.$store.getters.activeUser || {};
				this.$store.dispatch('FETCH_ARTICLE_ADD', this.addInfo).then((res) => {
					// console.log(res);
					this.loading = false;
					window.location.href = '/';
				})
				console.log(this.addInfo)
			}
		},
		components: {
			
		}
	}
</script>
<style scoped>
	#addArticle {
		max-width: none;
		max-width: 1000px;
		margin: 55px auto 20px;
		padding: 20px 0;
	}
	#footer {
		width: 100%;
		text-align: right;
	}
	#editor {
		/*z-index: 999;*/
	}
</style>
