import {createRouter, createWebHistory} from 'vue-router';

import Assemblers from "../sfc/pages/Assemblers.vue";
import EntitiesIndex from "../sfc/pages/Entities/Index.vue";
import EntitiesCreate from "../sfc/pages/Entities/Create.vue";
import EntitiesShow from "../sfc/pages/Entities/Show.vue";
import Processes from "../sfc/pages/Processes.vue";
import Repositories from "../sfc/pages/Repositories.vue";
import Resources from "../sfc/pages/Resources.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {name: 'assemblers.index', path: '/assemblers', component: Assemblers},

        {name: 'entities.index', path: '/entities', component: EntitiesIndex},
        {name: 'entities.create', path: '/entities/new', component: EntitiesCreate},
        {name: 'entities.show', path: '/entities/:id', component: EntitiesShow},

        {name: 'processes.index', path: '/processes', component: Processes},

        {name: 'repositories.index', path: '/repositories', component: Repositories},

        {name: 'resources.index', path: '/resources', component: Resources}
    ]
})

export default router
