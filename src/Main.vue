<template>
    <div>
        <div class="tabs">
            <ul>
            <li>
                <!-- 使用 router-link指向定义的path -->
                <router-link :to="{ name : 'Home' }" tag="li">
                    <div></div>
                    <div>首页</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name : 'Explorer' }" tag="li">
                    <div></div>
                    <div>探索</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name : 'Cart' }" tag="li">
                    <div></div>
                    <div>购物车</div>
                </router-link>
            </li>
            <li>
                <router-link to="/me" tag="li">
                    <div></div>
                    <div>我</div>
                </router-link>
            </li>
            </ul>
        </div>
        <div class="content" name="slide-fade">
             <!-- 用router-view 渲染视图 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.slide-fade-enter-active{
  transition: all .9s ease;
}

.slide-fade-leave-active{
  transition: all .9s cubic-bezier(1.0,0.5,0.8,1.0)
}

.slide-fade-enter,.slide-fade-leave-active{
  transform: translateX(-430px);
  opacity: 0;
}
</style>
