<script setup>
import Badge from "../../components/common/Badge.vue";
import ChevronRight from "../../components/icons/ChevronRight.vue";
import Pulse from "../../components/common/Pulse.vue";

defineProps(['entities']);
</script>

<template>
    <router-link v-for="entity in entities" :to="{name: 'entities.show', params: { id: entity.id }}"
                 class="row flex justify-between items-center border-b py-6">
        <div class="">
            <div class="flex gap-2 items-center">
                <Pulse color="green"/>
                <div class="capitalize font-medium">{{ entity.name }}</div>
            </div>
            <div class="text-slate-400">
                Some description
            </div>
        </div>
        <div class="flex gap-2 items-center justify-center text-slate-600">
            <Badge color="green" text="Preview"/>
            <ChevronRight/>
        </div>
        <!--        <div class="column">{{ entity.name }}</div>-->
        <!--        <div class="column text-sky-700 font-semibold">-->
        <!--            <router-link :to="{name: 'entities.show', params: { id: entity.id }}">Details</router-link>-->
        <!--        </div>-->
    </router-link>
</template>
