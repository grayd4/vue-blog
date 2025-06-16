<template>
    <div class="container mx-auto">
        <header class="text-center my-8">
            <div class="grid grid-cols-8 gap-4 m-4">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <a href="https://github.com/grayd4"><v-icon name="bi-github" color="#6a7282" scale="3"></v-icon></a>
                <a href="https://www.linkedin.com/in/danieldgray/"><v-icon name="bi-linkedin" color="#6a7282" scale="3"></v-icon></a>
                <a href="https://www.youtube.com/@daniel_gray"><v-icon name="bi-youtube" color="#6a7282" scale="3"></v-icon></a>
            </div>
            <h1 class="text-5xl font-extrabold mb-10 text-gray-500 cursor-pointer" @click="$router.push('/')">Daniel's Blog</h1>
            <p class="font-extralight text-3xl text-gray-300">A blog to learn a little bit about vue & tailwind</p>
        </header>
    </div>
</template>