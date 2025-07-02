<template>
    <div class="container mx-auto">
        <div class="PostItem border border-slate-700 mb-4 p-4 rounded-lg cursor-pointer bg-slate-100" v-for="item, itemIndex in 3">
            <v-icon name="pr-spinner" scale="3" animation="spin" class="m-auto"></v-icon>
        </div>
    </div>
</template>