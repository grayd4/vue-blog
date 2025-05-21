<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'
import supabase from '../supabase'

const route = useRoute()

let post = reactive({});

//const post = store.posts.find(x => x.id === parseInt(route.params.id) )
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
    <div class="Post">
        <div v-if="!post">
            <p>No post found.</p>
        </div> 
        <div v-else>
            <h1>{{ post.title }}</h1>
            <p>{{ post.date }}</p>
            <p>{{ post.description }}</p>
            <p>{{ post.content }}</p>
        </div>
    </div>
</template>