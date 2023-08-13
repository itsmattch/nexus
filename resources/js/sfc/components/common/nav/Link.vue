<script setup>
defineProps(['icon', 'label', 'route'])
</script>

<template>
    <router-link :to="route" class="flex items-center py-3 px-4 gap-x-2 rounded" active-class="bg-slate-950 text-white">
        <component :is="icon"/>
        <span>{{ label }}</span>
    </router-link>
</template>
