<template>
    <div id="home">
        首页
        <ul>
            <router-link :to="{name : 'BookDetails',params:{id:1}}">
                <div>图书</div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {}
</script>

<style>

</style>
