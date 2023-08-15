<script setup>
import {ref} from "vue";
import EntityAPI from "../../../classes/api/EntityAPI.js";

const newEntityName = ref('');
const formError = ref('');

const createEntity = () => {
    EntityAPI.createEntity(newEntityName.value).then(() => {
        formError.value = '';
    }).catch((error) => {
        formError.value = error?.response?.data?.message || 'Cannot create a new entity.';
    });
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
