<template>
    <div>
        <transition class="content" name="slide-fade">
             <!-- 用router-view 渲染视图 -->
            <router-view></router-view>
        </transition>
        <div class="tabs">
            <ul>
            <li>
                <!-- 使用 router-link指向定义的path -->
                <router-link :to="{ name : 'Home' }" tag="li" active-class="active">
                    <img class="img" src="../assets/images/home.svg" alt="首页">
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

.img{
    width: 23px;
    height: 23px;
}
</style>
