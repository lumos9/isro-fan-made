import { createApp } from 'vue'
import App from './App.vue'
import Vue3Autocounter from 'vue3-autocounter';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, fab, far);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component('vue3-autocounter', Vue3Autocounter)
.use(router)
.mount('#app')
