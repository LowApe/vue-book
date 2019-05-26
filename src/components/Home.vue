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
          <div class="swiper-wrapper">
            <router-link class="swiper-slide"
              v-for="slide in slides"
              v-bind:key="slide.id"
             tag="div"
             :to="{name: 'BookDetails',params:{ id: slide.id}}">
              <img :src="slide.img_url"/>
            </router-link>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div><hr>
        <!-- 快讯 -->
        <div class="announcement">
          <label for="">快讯</label>
          <span>{{ announcement }}</span>
        </div>
      </div>
    </div>
    <div class="section">
      <div>
        <!-- 新书上架 -->
         <book-list :books="latesetUpdated"
        heading="新书推荐"
        @onBookSelect="preview($event)"></book-list>
      </div>
    </div><hr>
    <div class="section">
         <!-- 编辑推荐 -->
        <book-list :books="recommended"
        heading="编辑推荐"
        @onBookSelect="preview($event)"
        ></book-list>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import Booklist from '../components/Booklist'
export default {
  data () {
    return {
      announcement: '',
      slides: [],
      latesetUpdated: [],
      recommended: []
    }
  },
  components: {
    'book-list': Booklist
  },
  methods: {
    preview (book) {
      alert('显示图书详情')
    }
  },
  created () {
    this.$http.get('static/data.json').then(res => {
      console.log(res.body)
      this.announcement = res.body.announcement
      this.slides = res.body.slides
      this.latesetUpdated = res.body.latesetUpdated
      this.recommended = res.body.recommended
    })
  },
  // 不要选择 created 钩子应该采用 mounted
  // 否则 Swiper 不能生效,因为 created 调用时元素还没挂载到 DOM 上
  mounted () {
    // eslint-disable-next-line
    new Swiper(this.$refs.slider,{
      pagination: {
        el: '.swiper-pagination'
      },
      observer: true
    })
  }
}
</script>

<style>
</style>
