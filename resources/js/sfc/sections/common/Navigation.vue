<script setup>
import Analyze from "../../components/icons/Analyze.vue";
import LayersLinked from "../../components/icons/LayersLinked.vue";
import FileDescription from "../../components/icons/FileDescription.vue";
import BoxModel from "../../components/icons/BoxModel.vue";
import Compass from "../../components/icons/Compass.vue";

const links = [
    {route: '/resources', label: 'Resources', icon: FileDescription},
    {route: '/entities', label: 'Entities', icon: BoxModel},
    {route: '/assemblers', label: 'Assemblers', icon: LayersLinked},
    {route: '/repositories', label: 'Repositories', icon: Compass},
    {route: '/processes', label: 'Processes', icon: Analyze},
];
</script>

<template>
    <nav class="flex items-center justify-center p-3 gap-x-3 bg-white text-slate-900 shadow">
        <RouterLink v-for="link in links" :key="link.route" :to="link.route"
                    class="flex items-center justify-center py-2 px-4 gap-x-3 rounded-lg">
            <component :is="link.icon" color="#170206"/>
            <span>{{ link.label }}</span>
        </RouterLink>
    </nav>
</template>

<style scoped>
a.router-link-active {
    @apply bg-slate-100;
}
</style>
