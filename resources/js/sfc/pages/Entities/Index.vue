<script setup>
import {onMounted, ref} from 'vue';
import axios from 'axios';

const entities = ref([]);
const newEntityName = ref('');
const formError = ref('');

onMounted(async () => {
    try {
        const response = await axios.get('/api/entities');
        entities.value = response.data;
    } catch (error) {
        console.error('Error fetching entities:', error);
    }
});

const createEntity = async () => {
    try {
        const response = await axios.post('/api/entities/', {name: newEntityName.value});
        entities.value.push(response.data);
        newEntityName.value = '';
    } catch (error) {
        formError.value = error.response?.data?.message || 'Error creating entity';
    }
};
</script>

<template>
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
    <div class="card row">
        <h1>Create New Entity</h1>
        <form class="flex flex-col gap-8 items-start justify-start" @submit.prevent="createEntity">
            <div class="flex w-full flex-1 flex-col gap-2">
                <input v-model="newEntityName" name="name" placeholder="Entity Name" type="text">
                <div v-if="formError">{{ formError }}</div>
            </div>
            <button class="button bg-sky-700" type="submit">Create</button>
        </form>
    </div>
</template>
