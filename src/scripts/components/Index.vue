<template>
  <div class="m-index">
    <header>
    </header>
    
    <section>
      <router-view></router-view>
    </section>
    <nav>
      <ul>
        <router-link tag="li" to="/board" active-class="active" class="yo-ico">
          <span>&#xe6b8;<b>首页</b></span>
        </router-link>
        <router-link tag="li" to="/search" active-class="active" class="yo-ico">
          <span>&#xe629;<b>搜索</b></span>
        </router-link>
        <router-link tag="li" to="/user" active-class="active" class="yo-ico">
          <span>&#xe78b;<b>我的</b></span>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {

  }
</script>
