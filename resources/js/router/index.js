import {createRouter, createWebHistory} from 'vue-router';

import EntitiesIndex from "../sfc/pages/Entities/Index.vue";
import EntitiesShow from "../sfc/pages/Entities/Show.vue";
import Processes from "../sfc/pages/Processes.vue";
import Resources from "../sfc/pages/Resources.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {name: 'entities.index', path: '/entities', component: EntitiesIndex},
        {name: 'entities.show', path: '/entities/:id', component: EntitiesShow},

        {name: 'processes.index', path: '/processes', component: Processes},

        {name: 'resources.index', path: '/resources', component: Resources}
    ]
})

export default router
