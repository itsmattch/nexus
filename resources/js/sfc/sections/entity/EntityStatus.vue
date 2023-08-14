<script setup>
import Badge from "../../components/common/Badge.vue";

defineProps(['entity']);
</script>

<template>
    <section class="px-4 py-4 bg-slate-100 rounded-xl">
        <Badge color="slate" text="created"/>
    </section>
</template>
