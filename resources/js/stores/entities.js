import {defineStore} from "pinia";
import {ref} from "vue";
import EntityAPI from "../classes/api/EntityAPI.js";
import Entity from "../classes/models/Entity.js";

export const useEntitiesStore = defineStore('entity', () => {
    const entities = ref([]);
    const booted = ref(false);

    function boot() {
        if (booted.value) {
            return;
        }

        EntityAPI.getEntities().then((entities) => {
            entities.forEach((entity) => {
                addEntity(new Entity(entity.id, entity.name));
            })
        });

        booted.value = true;
    }

    function addEntity(entity) {
        entities.value.push(entity);
    }

    function removeEntity(id) {
        entities.value = entities.value.filter(entity => entity.id !== id);
    }

    return {boot, entities, addEntity, removeEntity}
});
