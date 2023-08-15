<script setup>
import SearchBox from "../../components/common/nav/SearchBox.vue";
import Link from "../../components/common/nav/Link.vue";
import CubeSphere from "../../components/icons/CubeSphere.vue";

const sections = [
    {
        name: 'Management',
        links: [
            {route: '/entities', label: 'Entities', icon: CubeSphere},
        ],
    },
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
