<script setup>
    import ProgImage from '@/components/ProgImage.vue'
</script>

<template>
    <div class="manual-bg-div">
        <ProgImage class="manual-bg-img" src="/Background.png" progressiveSrc="/Background_xs.png"></ProgImage>
        <div class="container mx-auto">
            <header class="">
                <div>
                    <div class="pt-4 px-4 flex flex-row-reverse">
                        <a class="tooltip" href="https://github.com/grayd4"><v-icon name="bi-github" color="#e5e7eb" scale="3" animation="pulse" hover></v-icon><span class="tooltiptext tooltiptextbottom">My GitHub</span></a>
                        <a class="tooltip" href="https://www.linkedin.com/in/danieldgray/"><v-icon name="bi-linkedin" color="#e5e7eb" scale="3" animation="pulse" hover></v-icon><span class="tooltiptext tooltiptextbottom">My LinkedIn</span></a>
                        <a class="tooltip" href="https://www.youtube.com/@daniel_gray"><v-icon name="bi-youtube" color="#e5e7eb" scale="3" animation="pulse" hover></v-icon><span class="tooltiptext tooltiptextbottom">My YouTube Channel</span></a>
                        <div class="tooltip"><v-icon class="cursor-pointer" name="bi-envelope-fill" color="#e5e7eb" scale="3"  @click="$router.push('/Contact')" animation="pulse" hover></v-icon><span class="tooltiptext tooltiptextbottom">Contact Me</span></div>
                        <div class="flex flex-row w-full">
                            <div class="tooltip"><v-icon class="cursor-pointer" name="bi-arrow-left-square-fill" color="#e5e7eb" scale="3"  @click="$router.back()" animation="pulse" hover></v-icon><span class="tooltiptext tooltiptextbottom">Go back</span></div>
                        </div>
                    </div>
                <h1 class="text-center text-5xl font-extrabold p-20 text-gray-200 cursor-pointer text-shadow-lg" @click="$router.push('/')">Daniel Gray</h1>
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