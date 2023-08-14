<script setup>
import axios from "axios";
import {useRouter} from "vue-router";

const props = defineProps(['entity']);
const router = useRouter();
const deleteEntity = async () => {
    try {
        await axios.delete('/api/entities/' + props.entity.id).then(() => {
            router.push('/entities');
        });
    } catch (error) {
        console.log(error);
    }
};
</script>

<template>
    <section>
        <h2>Entity Removal</h2>
        <button class="button bg-red-500 text-white" @click="deleteEntity">Delete</button>
    </section>
</template>
