<script setup>
import Navigation from "./sfc/sections/common/Navigation.vue";
</script>

<template>
    <Navigation/>
    <div class="m-auto max-w-3xl p-6 flex flex-col gap-6">
        <RouterView/>
    </div>
</template>
