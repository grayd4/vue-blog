<script setup>
import { reactive, toRaw } from 'vue'
import { useRoute } from 'vue-router'
import ProgImage from '@/components/ProgImage.vue'
import store from '../store'
import supabase from '../supabase'

const route = useRoute()

let post = reactive({});
let photos = reactive({});
let links = reactive({});

//const post = store.posts.find(x => x.id === parseInt(route.params.id) )
// TODO: why is this necessary after navigating from Home? shouldn't posts be cached from the home query?
// Fine to have this generally cause someone could save just the link, but still. This executes every time
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

const fetchPostPictures = async (postId) => {
    let { data, error } = await supabase
        .from('photos')
        .select()
        .eq('post_id', postId)

    if (error) throw new Error(error)

    Object.assign(photos, data)
}

const fetchPostLinks = async (postId) => {
    let { data, error } = await supabase
        .from('externalLinks')
        .select()
        .eq('post_id', postId)

    if (error) throw new Error(error)

    Object.assign(links, data)
}


fetchPost(route.params.id)
fetchPostPictures(route.params.id)
fetchPostLinks(route.params.id)

</script>

<template>
    <main class="container mx-auto">
        <div class="Post m-4">
            <div v-if="!post">
                <p>No post found.</p>
            </div>
            <div v-else>
                <h1 class="text-amber-200 text-6xl font-bold mb-4 text-shadow-xs">{{ post.title }}</h1>
                <p v-if="post.date" class="text-xl text-slate-500">{{ new Date(post.date).toLocaleString("en-US") }}</p>
                <p class="text-xl text-slate-500">{{ post.description }}</p>
                <a class="underline text-gray-500 hover:text-blue-500 visited:text-purple-300" v-if="post.github" v-bind:href="post.github">
                    <div class="flex flex-row">
                        <v-icon name="bi-github" color="#6a7282" scale="2" mr-4></v-icon>
                        <p class="mb-auto mt-auto">Project GitHub</p>
                    </div>
                </a>
                <p class="post-text text-l text-slate-800 mt-4 mb-4">{{ post.content }}</p>
                <div class="m-4" v-for="item in photos">
                    <div v-if="item.type == 'image'">
                        <ProgImage class="rounded" v-bind:src="item.url" v-bind:progressiveSrc="item.progressive_image_url" v-bind:alt="item.caption"></ProgImage>
                        <p class="text-l text-slate-500 mb-4">{{ item.caption }}</p>
                    </div>
                    <div v-else-if="item.type == 'youtube'">
                        <iframe loading="lazy" class="w-full aspect-video" v-bind:src="item.url"></iframe>
                        <p class="text-l text-slate-500 mb-4">{{ item.caption }}</p>
                    </div>
                </div>
                <div>
                    <h2 class="text-xl text-slate-700" v-if="Object.keys(links).length">External Links</h2>
                    <div class="m-4" v-for="item in links">
                        <div class="flex flex-row">
                            <a class="underline text-gray-500 hover:text-blue-500 visited:text-purple-300" v-bind:href="item.link">{{ item.name }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>