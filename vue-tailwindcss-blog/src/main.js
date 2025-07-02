import './assets/main.css' // main css file

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { 
    BiArrowLeftSquare,
    BiGithub, 
    BiLinkedin, 
    BiYoutube
} from "oh-vue-icons/icons";

addIcons(
    BiArrowLeftSquare,
    BiGithub,
    BiYoutube,
    BiLinkedin
);

const app = createApp(App)
app.component("v-icon", OhVueIcon);

app.use(router)

app.mount('#app')
