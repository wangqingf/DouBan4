<template lang="html">
  <div class="m-boardlist"> 
  	<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :autoFill="false" ref="loadmore">
    <ul>
      <router-link tag="li" :key="index" :to="``" v-for="(item,index) in list">
        <div class="lic">
        	<img :src="item.image" />
        	<div class="small">￥{{item.price}}</div>
        </div>
        <p v-text="item.brand"></p>
        <p v-text="item.productDescription"></p>
        <div class="yo-ico">&#xe62f; {{item.favNum}}</div>
      </router-link>
    </ul>
    </mt-loadmore>
  </div>
</template>

<script>
import utilAxios from '../utils/axios'
import Vue from 'vue'
import { Loadmore } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)
import { Indicator } from 'mint-ui';

export default {
  data(){
    return {
      title: '',
      list: [],
      allLoaded: false
    }
  },

 methods: {
      loadTop: function () {
        let that = this
        let type = that.$route.params.type
        utilAxios.get({
          url: '/api/m/search/list?category=2&keyword=&sort=0&minPrice=-1&maxPrice=-1&pageNum=0&pageSize=40',
          method: 'get',
          callback: function (res) {
            that.list = res.data.data.response.records.concat(that.list)
            that.$refs.loadmore.onTopLoaded();
          }
        })
      },
      loadBottom: function () {
        let that = this
        let type = that.$route.params.type
        utilAxios.get({
          url: '/api/m/search/list?category=2&keyword=&sort=0&minPrice=-1&maxPrice=-1&pageNum=2&pageSize=40',
          method: 'get',
          callback: function (res) {
            that.list = that.list.concat(res.data.data.response.records)
            that.$refs.loadmore.onBottomLoaded()
          }
        })
      }
    },

    mounted: function () {
      let that = this
      let type = that.$route.params.type

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      utilAxios.get({
        url: '/api/m/search/list?category=2&keyword=&sort=0&minPrice=-1&maxPrice=-1&pageNum=0&pageSize=40',
        method: 'get',
        callback: function (res) {
        	console.log(res)
          that.list = res.data.data.response.records
          Indicator.close()
        }
      })
    }
}
</script>

<style lang="css">
</style>
