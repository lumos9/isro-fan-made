import  * as vueRouter from 'vue-router';
import Landing from '../components/Landing.vue';
import About from '../components/About.vue';
import Missions from '../components/Missions.vue';
import Careers from '../components/Careers.vue';
import Newsroom from '../components/Newsroom.vue';
import NotFound from '../components/404.vue';
// 1. Define route components.
// These can be imported from other files
//const Home = { template: '<div>Home</div>' }
//const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: Landing },
    { path: '/about', component: About },
    { path: '/missions', component: Missions },
    { path: '/careers', component: Careers },
    { path: '/newsroom', component: Newsroom },
    { path: '/news', component: Newsroom },
    { path: '/press', component: Newsroom },
    { path: '/updates', component: Newsroom },
    { path: '/:pathMatch(.*)*', component: NotFound },
]
  
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = vueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    //history: vueRouter.createWebHashHistory(),
    history: vueRouter.createWebHistory(),
    routes, // short for `routes: routes`
});

export default router;

// 5. Create and mount the root instance.
//const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
//app.use(router)

//app.mount('#app')

// Now the app has started!