<script setup>
const props = defineProps(['color', 'text']);
const colors = {
    background: 'bg-' + props.color + '-300',
    text: 'text-' + props.color + '-500',
    dot: 'bg-' + props.color + '-500',
};
</script>

<template>
    <div :class="['px-2 py-1 rounded-3xl text-sm flex justify-center items-center gap-1', colors.background, colors.text]">
        <div :class="['p-1 rounded-xl', colors.dot]"></div>
        <div>{{ text }}</div>
    </div>
</template>
