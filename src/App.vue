<template>
  <div id="app">
  	<fheader :user="user"></fheader>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<style>
  @import './less/index.less'
</style>
<script>
	import fheader from './components/header.vue'
	export default {
    data() {
      return {
        user: this.$store.getters.activeUser
      }
    },
		components: {
			fheader
		},
    created() {
      this.$store.dispatch('FETCH_CURRENT_USER').then(res => {
        if(res.data.result === 'TRUE') {
          this.$store.commit('SET_USER', res.data.data);
          this.user = this.$store.getters.activeUser;
        }
      });
    }
	}
</script>

