<script setup>
import {ref} from "vue";

const emit = defineEmits(['createBadge', 'deleteBadge']);
const props = defineProps(['entity']);

const name = ref('');
const keys = ref('');
const formError = ref('');

const createBadge = async () => {
    const keysArray = keys.value.split(',').map(key => key.trim());
    try {
        const response = await axios.post('/api/badges/', {
            entity_id: props.entity.id,
            keys: keysArray,
            name: name.value
        });
        emit('createBadge', response.data);
    } catch (error) {
        console.log(error);
        formError.value = error.response?.data?.message || 'Error creating entity';
    }
};

const deleteBadge = async (id) => {
    try {
        await axios.delete('/api/badges/' + id);
        emit('deleteBadge', id);
    } catch (error) {
        console.log(error);
        formError.value = error.response?.data?.message || 'Error creating entity';
    }
};
</script>

<template>
    <section class="flex flex-col gap-4">
        <h2>Badges</h2>
        <p class="max-w-md text-sm">
            Different systems can use their own IDs to identify the same instances
            of entities. With badges, you can label and manage them.
        </p>
        <div class="w-full rounded">
            <div v-for="badge in entity.badges" class="flex justify-between items-center gap-4 w-full border-b-2 border-slate-100 last:border-b-0 py-4">
                <div>
                    <div class="font-semibold capitalize">{{ badge.name }}</div>
                    <div class="text-sm">Requires keys: {{ badge.keys.map(item => item.name).join(', ') }}</div>
                </div>
                <button class="text-red-500 font-bold" @click="deleteBadge(badge.id)">Delete</button>
            </div>
        </div>
        <form class="flex flex-col gap-4 w-full items-end" @submit.prevent="createBadge">
            <div class="flex gap-4 w-full">
                <input v-model="name" class="flex-2" name="name" placeholder="New badge" type="text">
                <input v-model="keys" class="flex-3" name="keys" placeholder="Badge keys" type="text">
            </div>
            <div class="flex justify-between items-center w-full">
                <div class="text-red-500 font-bold">{{ formError }}</div>
                <button class="button bg-slate-100" type="submit">Add New Badge</button>
            </div>
        </form>
    </section>
</template>
