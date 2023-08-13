<script setup>
import {ref} from 'vue';
import axios from "axios";
import {useRouter} from "vue-router";

const entityName = ref('');
const router = useRouter();

const createEntity = async () => {
    await axios.post('/api/entities/', {name: entityName.value}).then(() => {
        router.push('/entities');
    });
};
</script>

<template>
    <div class="card">
        <div class="row">
            <h1>Create New Entity</h1>
        </div>
        <div class="row">
            <input type="text" name="name" v-model="entityName" placeholder="Entity Name">
        </div>
        <div class="row flex">
            <button class="button bg-sky-700" @click="createEntity">Create</button>
        </div>
    </div>
</template>
