<script setup>
import store from '../store.js'
import supabase from '../supabase'
import EmptyPostList from '@/components/EmptyPostList.vue'
import ProgImage from '@/components/ProgImage.vue'
import { UtilConsts } from '@/consts.js'

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
    <div class="Home">
        <main class="container mx-auto">
            <div class="grid grid-cols-2 gap-4 m-4">
                <div class="tech-posts">
                    <h2 class="text-slate-700 mb-4 text-2xl text-center border-b border-slate-700 p-4" >Tech Stuff</h2>
                    <div v-if="!store.posts.filter((item) => item.category == 'tech').length">
                        <EmptyPostList />
                    </div>
                    <div v-else class="PostItem border border-slate-700 mb-4 p-4 rounded-lg cursor-pointer bg-slate-100" v-for="item, itemIndex in store.posts.filter((item) => item.category == 'tech')" v-bind:key="itemIndex" @click="$router.push(`/post/${item.id}`)">
                        <h1 class="text-slate-900 text-2xl">{{ item.title }}</h1>
                        <p class="text-slate-300 text-xl mb-4">{{ new Date(item.date).toLocaleString("en-US") }}</p>
                        <p class="text-xl text-slate-500">{{ getWordCount(item.content) }} words</p>
                        <ProgImage v-if="item.thumb" class="rounded h-48 w-96 object-cover mt-1" v-bind:src="item.thumb" v-bind:progressiveSrc="UtilConsts.DEFAULT_LOADING_IMG" v-bind:alt="item.caption"></ProgImage>
                    </div>
                </div>
                <div class="general-posts">
                    <h2 class="text-slate-700 mb-4 text-2xl text-center border-b border-slate-700 p-4" >General</h2>
                    <div v-if="!store.posts.filter((item) => item.category != 'tech').length">
                        <EmptyPostList />
                    </div>
                    <div v-else class="PostItem border border-slate-700 mb-4 p-4 rounded-lg cursor-pointer bg-slate-100" v-for="item, itemIndex in store.posts.filter((item) => item.category != 'tech')" v-bind:key="itemIndex" @click="$router.push(`/post/${item.id}`)">
                        <h1 class="text-slate-900 text-2xl">{{ item.title }}</h1>
                        <p class="text-slate-300 text-xl mb-4">{{ new Date(item.date).toLocaleString("en-US") }}</p>
                        <p class="text-xl text-slate-500">{{ getWordCount(item.content) }} words</p>
                        <ProgImage v-if="item.thumb" class="rounded h-48 w-96 object-cover mt-1" v-bind:src="item.thumb" v-bind:progressiveSrc="UtilConsts.DEFAULT_LOADING_IMG" v-bind:alt="item.caption"></ProgImage>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>