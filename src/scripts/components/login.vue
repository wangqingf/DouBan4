<template>
  <div class="m-login">
	     <div class="top">
	          <b class="yo-ico"  @click="back">&#x3484;</b>
	     </div>
         <div class="ban">
         	  <img src="http://www.xiangqu.com/build/xiangqu/images/login_logo.jpg" />
         </div>
         <div class="write">
		         <ul >
		         	  <li>
		         	  	 <input type="text" placeholder="请填入手机号" v-model="username" name="username"/>
		         	  </li>
		         	  <li>
		         	  	 <input type="text" placeholder="请输入密码" v-model="password" name="password"/>
		         	  	 <span></span>
		         	  	 <i class="yo-ico">&#xe610;</i>
		         	  </li>
		         </ul>
         </div>
         <div class="bttn">
         	  <input type="submit" value="登录" @click="login"/>	  
         </div>
         <div class="aside">
         	<span>还没有账号！快速注册</span>
         	<b></b>
         	<span>忘记密码？</span>
         </div>
  </div>
</template>

<script>
import Vue from 'vue'
import utilAxios from '../utils/axios'
export default {
  data(){
    return {
      username: '',
      password: '',
      storeName: ''
    }
  },
  props: [],
  methods: {
    login: function () {
      let that = this
      utilAxios.post({
        url: '/nodejs/users/login',
        method: 'post',
        data: `username=${this.username}&password=${this.password}`,
        callback: function (res) {
          if (res.data.username) {
            that.hideModal()
            localStorage.setItem('username', res.data.username)
            that.storeName = res.data.username
          }
        }
      })
    },
    cancel: function () {
      //
      this.hideModal()
    },
    showModal: function () {
      this.isShow = true
    },
    hideModal: function () {
      this.isShow = false
    },
    back: function () {
      this.$router.go(-1)
    }
  },

  mounted: function () {
  }
}

</script>

<style>
</style>