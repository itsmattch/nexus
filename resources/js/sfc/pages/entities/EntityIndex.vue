<script setup>
import {onMounted, ref} from 'vue';
import axios from 'axios';
import CreateNewEntityForm from "../../sections/entities/CreateNewEntityForm.vue";
import EntitiesList from "../../sections/entities/EntitiesList.vue";

const entities = ref([]);
const addEntity = (entity) => {
    entities.value.push(entity);
};

onMounted(async () => {
    try {
        const response = await axios.get('/api/entities');
        entities.value = response.data;
    } catch (error) {
        console.error('Error fetching entities:', error);
    }
});
</script>

<template>
    <h1>All Entities</h1>
    <div>
        <EntitiesList :entities="entities"/>
    </div>
    <div class="sticky bottom-0 py-6 bg-white">
        <CreateNewEntityForm @newEntity="addEntity"/>
    </div>
</template>
