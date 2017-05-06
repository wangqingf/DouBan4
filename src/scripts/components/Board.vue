<template lang="html">
  <div class="m-board">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="(item,index) in dataSource" :key="index">
        <img :src="item.images.large" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import utilAxios from '../utils/axios'

export default {
  data() {
    return {
      dataSource: []
    }
  },

  mounted: function () {
    let that = this
    utilAxios.get({
      url: '/api/v2/movie/in_theaters?count=10',
      method: 'get',
      callback: function (res) {
        that.dataSource = that.dataSource.concat(res.data.subjects)
      }
    })
  }
}
</script>
