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
export default {}
</script>

<style>
</style>
