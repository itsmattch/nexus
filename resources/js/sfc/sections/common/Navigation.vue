<script setup>
import SearchBox from "../../components/common/nav/SearchBox.vue";
import BoxModel from "../../components/icons/BoxModel.vue";
import Link from "../../components/common/nav/Link.vue";

const sections = [
    {
        name: 'Management',
        links: [
            // {route: '/resources', label: 'Resources', icon: FileDescription},
            {route: '/entities', label: 'Entities', icon: BoxModel},
            // {route: '/processes', label: 'Processes', icon: Analyze},
            // {route: '/health-checks', label: 'Health Checks', icon: Heartbeat},
        ],
    },
    // {
    // name: 'Miscellaneous',
    // links: [
    // {route: '/notifications', label: 'Notifications', icon: Bell},
    // {route: '/settings', label: 'Settings', icon: Settings},
    // ],
    // },
];
</script>

<template>
    <nav class="w-full max-w-xs gap-10 flex flex-col">
        <SearchBox/>
        <div v-for="section in sections" :key="section.name" class="flex flex-col gap-3">
            <div class="font-bold">{{ section.name }}</div>
            <Link v-for="link in section.links" :key="link.route" v-bind="link"/>
        </div>
    </nav>
</template>
