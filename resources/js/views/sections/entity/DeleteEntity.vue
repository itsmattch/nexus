<script setup>
import EntityAPI from "../../../classes/api/EntityAPI.js";
import {useRouter} from "vue-router";

const router = useRouter();
const props = defineProps(['entity']);

const deleteEntity = async () => {
    await EntityAPI.removeEntity(props.entity.id).then(() => {
        router.push('/entities');
    });
};
</script>

<template>
    <section class="text-sm flex flex-col gap-4 p-4 border-2 border-red-500 rounded">
        <h2>Entity Removal</h2>
        <p class="max-w-md">
            Deleting the entity will remove all related configurations, including badges, repositories,
            and assemblers. <span class="font-bold">This action cannot be undone.</span>
        </p>
        <button class="button bg-red-500 text-white" @click="deleteEntity">Delete</button>
    </section>
</template>
