<template>
  <transition name="slide-fade">
      <!-- 用router-view 渲染视图 -->
      <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
