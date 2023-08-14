<script setup>
const props = defineProps(['color', 'text']);
const colors = {
    background: 'bg-' + props.color + '-200',
    text: 'text-' + props.color + '-600',
    dot: 'bg-' + props.color + '-400',
};
</script>

<template>
    <div :class="['px-2 py-1 rounded-3xl text-sm flex justify-center items-center gap-1', colors.background]">
        <div :class="['p-1 rounded-xl', colors.dot]"></div>
        <div :class="colors.text">{{ text }}</div>
    </div>
</template>
