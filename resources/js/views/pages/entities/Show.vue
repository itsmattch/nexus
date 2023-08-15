<script setup>
import {useRoute} from "vue-router";
import DeleteEntity from "../../sections/entity/DeleteEntity.vue";
import EntityBadges from "../../sections/entity/EntityBadges.vue";
import {computed, watchEffect} from "vue";
import {useEntitiesStore} from "../../../stores/entities.js";

const route = useRoute();
const entitiesStorage = useEntitiesStore();
const entity = computed(() => {
    return entitiesStorage.entities[route.params.id] || {};
})

watchEffect(async () => {
    const currentEntity = entity.value;

    if (currentEntity.id) {
        await entitiesStorage.bootEntity(currentEntity.id);
    }
});
</script>

<template>
    <h1 class="capitalize">{{ entity.name }}</h1>
    <EntityBadges :entity="entity"/>
    <DeleteEntity :entity="entity"/>
</template>
