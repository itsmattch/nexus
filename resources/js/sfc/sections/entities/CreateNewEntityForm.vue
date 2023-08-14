<script setup>
import axios from "axios";
import {ref} from "vue";

const emit = defineEmits(['newEntity']);
const newEntityName = ref('');
const formError = ref('');

const createEntity = async () => {
    try {
        const response = await axios.post('/api/entities/', {name: newEntityName.value});
        emit('newEntity', response.data);
        newEntityName.value = '';
    } catch (error) {
        console.log(error);
        formError.value = error.response?.data?.message || 'Error creating entity';
    }
};
</script>

<template>
    <form class="flex flex-col gap-4" @submit.prevent="createEntity">
        <input v-model="newEntityName" name="name" placeholder="New entity name" type="text">
        <div class="flex justify-between items-center">
            <div class="text-red-500 font-bold">{{ formError }}</div>
            <button class="button bg-slate-950 text-white shadow-stripe" type="submit">Create</button>
        </div>
    </form>
</template>
