<template>
    <div class="container mx-auto">
        <footer class="pt-4 pb-4">
            <div>
                <div class="pt-4 px-4 flex flex-row-reverse">
                    <a href="https://github.com/grayd4" class="tooltip"><v-icon name="bi-github" color="#d1d5dc" scale="2" animation="pulse" hover></v-icon><span class="tooltiptext tooltiptexttop">My GitHub</span></a>
                    <a href="https://www.linkedin.com/in/danieldgray/" class="tooltip"><v-icon name="bi-linkedin" color="#d1d5dc" scale="2" animation="pulse" hover></v-icon><span class="tooltiptext tooltiptexttop">My LinkedIn</span></a>
                    <a href="https://www.youtube.com/@daniel_gray" class="tooltip"><v-icon name="bi-youtube" color="#d1d5dc" scale="2" animation="pulse" hover></v-icon><span class="tooltiptext tooltiptexttop">My YouTube Channel</span></a>
                    <div class="tooltip"><v-icon class="cursor-pointer" name="bi-envelope-fill" color="#d1d5dc" scale="2"  @click="$router.push('/Contact')" animation="pulse" hover></v-icon><span class="tooltiptext tooltiptexttop">Contact Me</span></div>
                    <div class="flex flex-row w-full">
                        <div class="tooltip"><v-icon class="cursor-pointer" name="bi-arrow-left-square-fill" color="#d1d5dc" scale="2"  @click="$router.back()" animation="pulse" hover></v-icon><span class="tooltiptext tooltiptexttop">Go back</span></div>
                        <p class="text-l font-bold text-gray-300 m-auto text-center mx-4 w-full">Copyright Daniel Gray {{ new Date().getFullYear() }}</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>