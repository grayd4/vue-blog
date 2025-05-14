<script setup>
import { reactive } from 'vue'

const posts = [
    {
        id: 1,
        title: "Post 1",
        description: "Description post 1",
        date: new Date()
    },
    {
        id: 2,
        title: "Post 2",
        description: "Description post 2",
        date: new Date()
    },
    {
        id: 3,
        title: "Post 3",
        description: "Description post 3",
        date: new Date()
    }
]
</script>


<template>
    <br />
    <div class="Home">
        <main class="container mx-auto">
            <div class="PostItem" v-for="item, itemIndex in posts" v-bind:key="itemIndex" @click="$router.push(`/post/${item.id}`)">
                <h1>{{ item.title }}, post #{{ item.id }}</h1>
                <p>{{ item.description }}</p>
            </div>
        </main>
    </div>
</template>