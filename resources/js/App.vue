<script setup>
import Navigation from "./views/sections/common/Navigation.vue";
</script>

<template>
    <div class="flex min-h-full">
        <div class="flex flex-2 bg-slate-100 justify-end px-5 py-10">
            <Navigation/>
        </div>
        <div class="flex-3">
            <div class="w-full max-w-3xl p-10 flex flex-col gap-y-6">
                <router-view/>
            </div>
        </div>
    </div>
</template>
