<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'
import supabase from '../supabase'

const route = useRoute()

let post = reactive({});

//const post = store.posts.find(x => x.id === parseInt(route.params.id) )
// TODO: why is this necessary after navigating from Home? shouldn't posts be cached from the home query?
// Fine to have this generally case someone could save just the link, but still. This executes every time
const fetchPost = async (id) => {
    const found = store.posts.find(x => x.id === parseInt(route.params.id))
    if (found) {
        return
    }
     let { data, error } = await supabase
    .from('posts')
    .select()   // all columns
    .eq('id', id)
    .single()

    if (error) throw new Error(error)

    Object.assign(post, data)
    store.posts = [...store.posts, post]    // Cache post
}

fetchPost(route.params.id)
</script>

<template>
    <main class="container mx-auto">
        <div class="Post">
            <div v-if="!post">
                <p>No post found.</p>
            </div> 
            <div v-else>
                <h1 class="text-blue-300 text-6xl font-bold mb-4">{{ post.title }}</h1>
                <p class="text-xl text-slate-500">{{ new Date(post.date).toLocaleString("en-US") }}</p>
                <p class="text-xl text-slate-500">{{ post.description }}</p>
                <p class="text-l text-slate-800">{{ post.content }}</p>
            </div>
        </div>
    </main>
</template>