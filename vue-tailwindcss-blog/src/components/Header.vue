<script setup>
    import ProgImage from '@/components/ProgImage.vue'
</script>

<template>
    <div class="manual-bg-div">
        <ProgImage class="manual-bg-img" src="/Background.png" progressiveSrc="/Background_xs.png"></ProgImage>
        <div class="container mx-auto">
            <header class="text-center">
                <div>
                    <div class="pt-4 px-4 flex flex-row-reverse">
                        <a href="https://github.com/grayd4"><v-icon name="bi-github" color="#e5e7eb" scale="3"></v-icon></a>
                        <a href="https://www.linkedin.com/in/danieldgray/"><v-icon name="bi-linkedin" color="#e5e7eb" scale="3"></v-icon></a>
                        <a href="https://www.youtube.com/@daniel_gray"><v-icon name="bi-youtube" color="#e5e7eb" scale="3"></v-icon></a>
                        <v-icon class="cursor-pointer" name="bi-envelope-fill" color="#e5e7eb" scale="3"  @click="$router.push('/Contact')"></v-icon>
                    </div>
                <h1 class="text-5xl font-extrabold p-20 text-gray-200 cursor-pointer text-shadow-lg" @click="$router.push('/')">Daniel Gray</h1>
                </div>
            </header>
        </div>
    </div>
    <p class="font-extralight text-xl text-gray-500 text-center">Built with 
        <a class="underline text-gray-600 hover:text-blue-500 visited:text-purple-300" href="https://vuejs.org/">Vue</a>, 
        <a class="underline text-gray-600 hover:text-blue-500 visited:text-purple-300" href="https://tailwindcss.com/">Tailwind CSS</a>, and 
        <a class="underline text-gray-600 hover:text-blue-500 visited:text-purple-300" href="https://supabase.com/">Supabase</a>.
    </p>
</template>