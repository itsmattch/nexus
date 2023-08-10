import {createRouter, createWebHistory} from 'vue-router';
import Assemblers from "../sfc/pages/Assemblers.vue";
import Entities from "../sfc/pages/Entities.vue";
import Processes from "../sfc/pages/Processes.vue";
import Repositories from "../sfc/pages/Repositories.vue";
import Resources from "../sfc/pages/Resources.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/assemblers', component: Assemblers},
        {path: '/entities', component: Entities},
        {path: '/processes', component: Processes},
        {path: '/repositories', component: Repositories},
        {path: '/resources', component: Resources}
    ]
})

export default router
