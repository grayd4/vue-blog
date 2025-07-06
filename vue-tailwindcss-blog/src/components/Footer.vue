<template>
    <div class="container mx-auto">
        <footer class="pt-4 pb-4">
            <div>
                <div class="pt-4 px-4 flex flex-row-reverse">
                    <a href="https://github.com/grayd4"><v-icon name="bi-github" color="#d1d5dc" scale="2"></v-icon></a>
                    <a href="https://www.linkedin.com/in/danieldgray/"><v-icon name="bi-linkedin" color="#d1d5dc" scale="2"></v-icon></a>
                    <a href="https://www.youtube.com/@daniel_gray"><v-icon name="bi-youtube" color="#d1d5dc" scale="2"></v-icon></a>
                    <v-icon class="cursor-pointer" name="bi-envelope-fill" color="#d1d5dc" scale="2"  @click="$router.push('/Contact')"></v-icon>
                    <div class="flex flex-row w-full">
                        <v-icon class="cursor-pointer" name="bi-arrow-left-square-fill" color="#d1d5dc" scale="2"  @click="$router.back()"></v-icon>
                        <p class="text-l font-bold text-gray-300 m-auto text-center mx-4 w-full">Copyright Daniel Gray {{ new Date().getFullYear() }}</p>

                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>