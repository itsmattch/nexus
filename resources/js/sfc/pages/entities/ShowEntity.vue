<script setup>
import axios from 'axios';
import {onMounted, ref} from 'vue';
import {useRoute} from "vue-router";
import DeleteEntity from "../../sections/entity/DeleteEntity.vue";
import EntityStatus from "../../sections/entity/EntityStatus.vue";
import EntityStatistics from "../../sections/entity/EntityStatistics.vue";
import EntityBadges from "../../sections/entity/EntityBadges.vue";
import EntityInstances from "../../sections/entity/EntityInstances.vue";

const id = useRoute().params.id;
const entity = ref({});

onMounted(async () => {
    const response = await axios.get('/api/entities/' + id);
    entity.value = response.data;
});
</script>

<template>
    <h1 class="capitalize">{{ entity.name }}</h1>
    <EntityStatus :entity="entity"/>
    <EntityStatistics :entity="entity"/>
    <EntityBadges :entity="entity"/>
    <EntityInstances :entity="entity"/>
    <DeleteEntity :entity="entity"/>
</template>
