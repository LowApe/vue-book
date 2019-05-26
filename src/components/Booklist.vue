<template>
    <div class="book-list">
            <div class="header">
                <div class="heading">{{heading}}</div>
                <div class="more">更多...</div>
            </div>
            <div class="book-items">
                 <div class="book"
                 v-for="book in books"
                 :key="book.id"
                 @click="$emit('onBookSelect',book)">
                    <div class="cover">
                        <img  :src="book.img_url" alt="1"></div>
                    <div class="titile">{{book.title}}</div>
                    <div class="authors">{{book.authors | abc}}</div>
                </div>
            </div>
        </div>
</template>

<script>
/* eslint-disable */
export default {
    props: [
      'heading', 
      'books'
    ],
    filters: {
        abc(args){
            return args.join(',')
        }
    }
}
</script>

<style>

</style>
