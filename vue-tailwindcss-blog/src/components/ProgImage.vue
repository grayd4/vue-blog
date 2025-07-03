<template>
  <v-lazy-image v-bind:src="src" v-bind:src-placeholder="progressiveSrc"/>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
    name: "ProgImage",
    props: {
        src: String,
        progressiveSrc: String,
    },
    components: {
        VLazyImage
    }
};
</script>
