<template>
  <div class="m-registor">
         <div class="top">
         	  <b class="yo-ico" @click="back">&#x3484;</b>
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
		         	  	 <input type="text" placeholder="请输入验证码"/>
		         	  	 <span></span>
		         	  	 <b>获取验证码</b>
		         	  </li>
		         	  <li>
		         	  	 <input type="text" placeholder="请输入密码" v-model="password" name="password"/>
		         	  	 <span></span>
		         	  	 <i class="yo-ico">&#xe610;</i>
		         	  </li>
		         </ul>
         </div>
         <div class="bttn">
         	  <input type="submit" value="注册"  @click="registor"/>
         	  <span>已有账号！立即登录</span>
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
    registor: function () {
      let that = this
      utilAxios.post({
        url: '/nodejs/users/registor',
        method: 'post',
        data: `username=${this.username}&password=${this.password}`,
        callback: function (res) {
        	console.log(res)
          if (res.data.username) {
            localStorage.setItem('username', res.data.username)
            that.storeName = res.data.username
            window.location.href='http://localhost:8080/#/login';
          }
        }
      })
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