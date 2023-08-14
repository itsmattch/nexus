<script setup>
import CreateNewEntityForm from "../../sections/entities/CreateNewEntityForm.vue";
import EntitiesList from "../../sections/entities/EntitiesList.vue";
import {useEntitiesStore} from "../../../stores/entities.js";

const entitiesStore = useEntitiesStore();
entitiesStore.boot();
</script>

<template>
    <h1>All Entities</h1>
    <div>
        <EntitiesList/>
    </div>
    <div class="sticky bottom-0 py-6 bg-white">
        <CreateNewEntityForm/>
    </div>
</template>
