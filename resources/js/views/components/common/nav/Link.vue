<script setup>
defineProps(['icon', 'label', 'route'])
</script>

<template>
    <router-link :to="route" active-class="bg-slate-200 shadow-stripe" class="flex items-center py-3 px-4 gap-x-2 rounded">
        <component :is="icon"/>
        <span>{{ label }}</span>
    </router-link>
</template>
