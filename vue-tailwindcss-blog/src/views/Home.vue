<script setup>
import store from '../store.js'
import supabase from '../supabase'

const getWordCount = (str) => (str.split(' ').length)

const fetchPosts = async () => {
     let { data: posts, error } = await supabase
    .from('posts')
    .select()
    .order('date', {ascending: false})

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
            <div v-else class="PostItem border border-slate-700 mb-4 p-4 rounded-lg cursor-pointer bg-slate-100" v-for="item, itemIndex in store.posts" v-bind:key="itemIndex" @click="$router.push(`/post/${item.id}`)">
                <h1 class="text-slate-900 text-2xl">{{ item.title }}</h1>
                <p class="text-slate-300 text-xl mb-4">{{ new Date(item.date).toLocaleString("en-US") }}</p>
                <p class="text-xl text-slate-500">{{ getWordCount(item.content) }} words</p>
            </div>
        </main>
    </div>
</template>