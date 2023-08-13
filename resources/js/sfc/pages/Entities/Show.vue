<script setup>
import {onMounted, ref} from 'vue';
import axios from 'axios';
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();
const entity = ref([]);

onMounted(async () => {
    const response = await axios.get('/api/entities/' + route.params.id);
    entity.value = response.data;
});

const deleteEntity = async () => {
    await axios.delete('/api/entities/' + route.params.id).then(() => {
        router.push('/entities');
    });
};
</script>

<template>
    <div class="card">
        <div class="row">
            <h1>{{ entity.name }}</h1>
        </div>
        <div class="row flex">
            <button class="button bg-red-500" @click="deleteEntity">Delete</button>
        </div>
    </div>
</template>
