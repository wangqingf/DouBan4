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
		         	  	 <input type="text" placeholder="请填入手机号"/>
		         	  </li>
		         	  <li>
		         	  	 <input type="text" placeholder="请输入验证码"/>
		         	  	 <span></span>
		         	  	 <b>获取验证码</b>
		         	  </li>
		         	  <li>
		         	  	 <input type="text" placeholder="请输入密码"/>
		         	  	 <span></span>
		         	  	 <i class="yo-ico">&#xe610;</i>
		         	  </li>
		         </ul>
         </div>
         <div class="bttn">
         	  <input type="submit" value="注册" />
         	  <span>已有账号！立即登录</span>
         </div>
  </div>
	
</template>

<script>
let vm = {
  data(){
    return {
    }
  },
  props: {
    
  },

  methods: {
    back: function () {
      this.$router.go(-1)
    } 
  }
}
window.vm = vm
export default vm
</script>

<style>
</style>