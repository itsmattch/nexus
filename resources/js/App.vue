<script setup>
import Navigation from "./sfc/sections/common/Navigation.vue";
</script>

<template>
    <Navigation/>
    <RouterView/>
</template>

<style>
html, body {
    padding: 0;
    margin: 0;
}

html {
    height: 100%;
}

body {
    font-family: "Figtree", sans-serif;
    background: #F8F9FA;
    min-height: 100%;
    font-size: 16px;
}

a {
    text-decoration: none;
    color: inherit;
}
</style>
