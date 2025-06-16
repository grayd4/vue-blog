import './assets/main.css' // main css file

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// FontAwesome setup
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faArrowLeft)

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
