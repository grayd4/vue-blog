<script setup>
import store from '../store.js'
import supabase from '../supabase'

const getWordCount = (str) => (str.split(' ').length)

const fetchPosts = async () => {
     let { data: posts, error } = await supabase
    .from('posts')
    .select()

    if (error) throw new Error(error)
    store.posts = posts
}

fetchPosts()

</script>


<template>
    <br />
    <div class="Home">
        <main class="container mx-auto">
            <div v-if="!store.posts.length">
                There are no posts.
            </div>
            <div v-else class="PostItem" v-for="item, itemIndex in store.posts" v-bind:key="itemIndex" @click="$router.push(`/post/${item.id}`)">
                <h1 class="text-gray-500">{{ item.title }}, post #{{ item.id }}</h1>
                <p>{{ getWordCount(item.description) }} words</p>
            </div>
        </main>
    </div>
</template>