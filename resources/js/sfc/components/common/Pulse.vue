<script setup>
const props = defineProps(['color']);
const colors = {
    background: 'bg-' + props.color + '-200',
    dot: 'bg-' + props.color + '-400',
};
</script>

<template>
    <div :class="['p-1 rounded-3xl flex justify-center items-center', colors.background]">
        <div :class="['p-1 rounded-xl', colors.dot]"></div>
    </div>
</template>
