<script setup>
import Badge from "../../components/common/Badge.vue";
import ChevronRight from "../../components/icons/ChevronRight.vue";
import Pulse from "../../components/common/Pulse.vue";
import {useEntitiesStore} from "../../../stores/entities.js";

const entitiesStore = useEntitiesStore();
</script>

<template>
    <router-link v-for="entity in entitiesStore.entities" :to="{name: 'entities.show', params: { id: entity.id }}" class="row flex justify-between items-center border-b py-6">
        <div>
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
    </router-link>
</template>
