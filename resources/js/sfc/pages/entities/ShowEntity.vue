<script setup>
import axios from 'axios';
import {onMounted, ref} from 'vue';
import {useRoute} from "vue-router";
import DeleteEntity from "../../sections/entity/DeleteEntity.vue";
import EntityBadges from "../../sections/entity/EntityBadges.vue";

const id = useRoute().params.id;
const entity = ref({});
const createBadge = (badge) => {
    entity.value.badges.push(badge);
};
const deleteBadge = (id) => {
    entity.value.badges = entity.value.badges.filter(badge => badge.id !== id);
};

onMounted(async () => {
    const response = await axios.get('/api/entities/' + id);
    entity.value = response.data;
});
</script>

<template>
    <h1 class="capitalize">{{ entity.name }}</h1>
    <EntityBadges :entity="entity" @createBadge="createBadge" @deleteBadge="deleteBadge"/>
    <DeleteEntity :entity="entity"/>
</template>
