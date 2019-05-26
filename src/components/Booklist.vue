<template>
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
</template>

<script>
export default {}
</script>

<style>

</style>
