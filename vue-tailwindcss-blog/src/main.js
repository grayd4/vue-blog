import './assets/main.css' // main css file

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { 
    BiArrowLeftSquareFill,
    BiGithub, 
    BiLinkedin, 
    BiYoutube,
    PrSpinner,
    BiEnvelopeFill
} from "oh-vue-icons/icons";

addIcons(
    BiArrowLeftSquareFill,
    BiGithub,
    BiYoutube,
    BiLinkedin,
    PrSpinner,
    BiEnvelopeFill
);

const app = createApp(App)
app.component("v-icon", OhVueIcon);

app.use(router)

app.mount('#app')
