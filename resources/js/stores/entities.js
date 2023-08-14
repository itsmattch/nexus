import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import EntityAPI from "../classes/api/EntityAPI.js";
import Entity from "../classes/models/Entity.js";

export const useEntitiesStore = defineStore('entity', () => {
    const entities = reactive({});
    const booted = ref(false);

    async function boot() {
        if (booted.value) {
            return;
        }

        const response = await EntityAPI.getEntities();
        response.forEach((entity) => {
            addEntity(new Entity(entity.id, entity.name));
        })

        booted.value = true;
    }

    function addEntity(entity) {
        entities[entity.id] = entity;
    }

    function removeEntity(id) {
        delete entities[id];
    }

    return {boot, entities, addEntity, removeEntity}
});
