<template lang="html">
    <div class = "m-search">
      <div class ="m-header">
         <div class="top1">
         	   <span class="yo-ico">&#xe60d;</span>
         </div>
         <div class="bottom1">
         	   <dl>
         	   	   <dt>
         	   	   	   <span class="yo-ico">&#xe652;</span>
         	   	   </dt>
         	   	   <dd>
         	   	   	   <router-link to="/registor"><b class="b1">注册</b></router-link>
         	   	   	   <span></span>
         	   	   	   <router-link to="/login"><b class="b2">登录</b></router-link>
         	   	   </dd>
         	   </dl> 
         </div>
      </div>
      <div class="m-section">
      	 <div class="zro"></div>
      	 <div class="main">
      	 	  <div class="list">
      	 	  	<b>我的订单</b>
      	 	    <span>查看全部订单</span>
              <i class="yo-ico">&#xf07f;</i>
      	 	  </div>
      	 	  <div class="nav">	
      	 	  	<router-link  to="" >
                  <i class="yo-ico">&#xe655;</i><b>待付款</b>
                </router-link>
      	 	  	<router-link  to="" >
                  <i class="yo-ico">&#xe803;</i><b>待收货</b>
                </router-link>
      	 	  	<router-link  to="" >
                  <i class="yo-ico">&#xe681;</i><b>待评价</b>
                </router-link>
		        <router-link  to="" >
                  <i class="yo-ico">&#xe617;</i><b>退款/售后</b>
                </router-link> 		          		          		       
      	 	  </div>
      	 </div>
      	 <div class="zro"></div>
      	 <div class="wraf">
      	 	  <div class="set">
      	 	  	 <b>设置</b>
      	 	     <span></span>
               <i class="yo-ico">&#xf07f;</i>
      	 	  </div>
      	 	  <div class="custom">
      	 	  	 <b>客服中心</b>
      	 	     <span class="cus1">(7*24小时服务)</span>
      	 	     <b class="cus2">9533859</b>
               <i class="yo-ico">&#xf07f;</i>
      	 	  </div>
      	 </div>
      	 <div class="zro"></div>
      	 <div class="empty"> 	 	   
      	 	   <span>任何问题，立刻致电9533859，有我们在，您放心！</span>
      	 </div>	 
      </div>
    </div>  
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>