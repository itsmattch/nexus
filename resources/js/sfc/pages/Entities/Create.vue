<script setup>
import {ref} from 'vue';
import axios from "axios";
import {useRouter} from "vue-router";

const resourceName = ref('');
const router = useRouter();

const createEntity = async () => {
    await axios.post('/api/entities/', {name: resourceName.value}).then(() => {
        router.push('/entities');
    });
};
</script>

<template>
    <div class="card">
        <div class="row">
            <h1>Create New Resource</h1>
        </div>
        <div class="row">
            <input type="text" name="name" v-model="resourceName" placeholder="Resource Name">
        </div>
        <div class="row flex">
            <button class="button bg-sky-700" @click="createEntity">Create</button>
        </div>
    </div>
</template>
