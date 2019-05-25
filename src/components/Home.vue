<template>
  <div id="home">
    首页
    <ul>
      <router-link :to="{name : 'BookDetails',params:{id:1}}">
        <div>图书</div>
      </router-link>
    </ul>
    <div class="section">
      <div>
        <!-- 热门推荐 -->
        <!-- Swiper -->
        <div class="swiper-container" ref="slider">
          <div class="swiper-wrapper"
           v-for="slide in slides" v-bind:key="slide">
            <router-link class="swiper-slide" tag="div" :to="{name: 'BookDetail',params:{id:slide.id}}">
              <img :src="slide.img_url" alt=""/>
            </router-link>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <!-- 快讯 -->
      </div>
    </div>
    <div class="section">
      <div>
        <!-- 新书上架 -->
      </div>
    </div>
    <div class="section">
      <div>
        <!-- 编辑推荐 -->
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      slides: [
        {id: 1, img_url: '../assets/images/home.svg'},
        {id: 2, img_url: '../assets/logo.png'}
      ]
    }
  },
  // 不要选择 created 钩子应该采用 mounted
  // 否则 Swiper 不能生效,因为 created 调用时元素还没挂载到 DOM 上
  mounted () {
    // eslint-disable-next-line
    new Swiper(this.$refs.slider, { 
      pagination: this.$refs.pagination,
      paginationClickable: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: 2500,
      autoplayDisableOnInteraction: false
    })
  }
}
</script>

<style>
</style>
