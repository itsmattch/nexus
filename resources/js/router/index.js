import {createRouter, createWebHistory} from 'vue-router';

import EntitiesIndex from "../views/pages/entities/EntityIndex.vue";
import EntitiesShow from "../views/pages/entities/ShowEntity.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {name: 'entities.index', path: '/entities', component: EntitiesIndex},
        {name: 'entities.show', path: '/entities/:id', component: EntitiesShow},
    ]
})

export default router
