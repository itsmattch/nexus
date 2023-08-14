<script setup>
import CircleDashed from "../../components/icons/CircleDashed.vue";
import CircleCheck from "../../components/icons/CircleCheck.vue";

defineProps(['entity']);
</script>

<template>
    <section class="px-4 py-4 bg-slate-100 rounded-xl text-sm">
        <h2>Configuration Progress</h2>
        <p>Your entity is almost ready to be used! Just a few more steps to set up your integration.</p>
        <div class="flex justify-center items-center gap-2 font-semibold">
            <div>
                <CircleCheck/>
            </div>
            <span>Set up repository.</span>
        </div>
        <div class="flex justify-center items-center gap-2">
            <div>
                <CircleDashed/>
            </div>
            <span>Configure assembler.</span>
        </div>
        <div class="flex justify-center items-center gap-2">
            <div>
                <CircleDashed/>
            </div>
            <span>Add badges.</span>
        </div>
    </section>
</template>
