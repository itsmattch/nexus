<script setup>
import {onMounted, ref} from 'vue';
import axios from 'axios';

const entities = ref([]);

onMounted(async () => {
    const response = await axios.get('/api/entities');
    entities.value = response.data;
});
</script>

<template>
    <div class="flex justify-end">
        <router-link :to="{name: 'entities.create'}" class="button bg-sky-700">Create New</router-link>
    </div>
    <div class="card">
        <div class="row">
            <h1>Entities List</h1>
        </div>
        <div v-for="entity in entities" class="row flex justify-between">
            <div class="column">{{ entity.name }}</div>
            <div class="column text-sky-700 font-semibold">
                <router-link :to="{name: 'entities.show', params: { id: entity.id }}">Details</router-link>
            </div>
        </div>
    </div>
</template>
