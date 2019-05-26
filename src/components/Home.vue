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
        </div>
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
        <div class="book-list">
            <div class="header">
                <div class="heading">最新更新</div>
                <div class="more">更多...</div>
            </div>

            <div class="book-items">
                <div class="book">
                    <div class="cover"><img src="../assets/logo.png" alt="1"></div>
                    <div class="titile">Android</div>
                    <div class="authors">曲</div>
                </div>
                <div class="book">
                    <div class="cover"><img src="../assets/logo.png" alt="1"></div>
                    <div class="titile">Android</div>
                    <div class="authors">曲</div>
                </div>
                <div class="book">
                    <div class="cover"><img src="../assets/logo.png" alt="1"></div>
                    <div class="titile">Android</div>
                    <div class="authors">曲</div>
                </div>
                <div class="book">
                    <div class="cover"><img src="../assets/logo.png" alt="1"></div>
                    <div class="titile">Android</div>
                    <div class="authors">曲</div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div>
        <!-- 编辑推荐 -->
        <div class="book-list">
            <div class="header">
                <div class="heading">编辑推荐</div>
                <div class="more">更多...</div>
            </div>
            <div class="book-items">
                 <div class="book"
                 v-for="book in recommended"
                 :key="book.id">
                    <div class="cover">
                        <img  :src="book.img_url" alt="1"></div>
                    <div class="titile">{{book.title}}</div>
                    <div class="authors">{{book.authors | join}}</div>
                </div>
            </div>
        </div>
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
      announcement: '今日上架的图书全部八折',
      slides: [
        {id: 1, img_url: require('@/assets/logo.png')},
        {id: 2, img_url: require('@/assets/images/home.svg')}
      ],
      latesetUpdated: [
        {
          id: 1,
          titile: 'android1',
          authors: 'qu',
          img_url: require('@/assets/logo.png')
        },
        {
          id: 2,
          titile: 'android2',
          authors: 'qu',
          img_url: require('@/assets/logo.png')
        },
        {
          id: 2,
          titile: 'android3',
          authors: 'qu',
          img_url: require('@/assets/logo.png')
        }
      ],
      recommended: [
        {
          id: 1,
          titile: 'android1',
          authors: 'qu',
          img_url: require('@/assets/logo.png')
        },
        {
          id: 2,
          titile: 'android2',
          authors: 'qu',
          img_url: require('@/assets/logo.png')
        },
        {
          id: 2,
          titile: 'android3',
          authors: 'qu',
          img_url: require('@/assets/logo.png')
        }
      ]
    }
  },
  // 不要选择 created 钩子应该采用 mounted
  // 否则 Swiper 不能生效,因为 created 调用时元素还没挂载到 DOM 上
  mounted () {
    // eslint-disable-next-line
    new Swiper(this.$refs.slider,{
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style>
</style>
