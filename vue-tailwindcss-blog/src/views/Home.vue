<script setup>
import store from '../store.js'

const getWordCount = (str) => (str.split(' ').length)
</script>


<template>
    <br />
    <div class="Home">
        <main class="container mx-auto">
            <div class="PostItem" v-for="item, itemIndex in store.posts" v-bind:key="itemIndex" @click="$router.push(`/post/${item.id}`)">
                <h1>{{ item.title }}, post #{{ item.id }}</h1>
                <p>{{ getWordCount(item.description) }} words</p>
            </div>
        </main>
    </div>
</template>