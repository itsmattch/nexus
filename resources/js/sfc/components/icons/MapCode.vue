<script setup>
defineProps(['color']);
</script>

<template>
    <svg :stroke="color" class="icon icon-tabler icon-tabler-map-code" fill="none" height="24"
         stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
         xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
        <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v9"></path>
        <path d="M9 4v13"></path>
        <path d="M15 7v6.5"></path>
        <path d="M20 21l2 -2l-2 -2"></path>
        <path d="M17 17l-2 2l2 2"></path>
    </svg>
</template>
