import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import EntityAPI from "../classes/api/EntityAPI.js";
import Entity from "../classes/models/Entity.js";
import Badge from "../classes/models/Badge.js";

export const useEntitiesStore = defineStore('entity', () => {
    const entities = reactive({});
    const booted = ref(false);
    const bootedEntities = reactive({});

    async function bootEntities() {
        if (booted.value) {
            return;
        }

        const response = await EntityAPI.getEntities();
        response.forEach((entity) => {
            addEntity(new Entity(entity.id, entity.name));
        })

        booted.value = true;
    }

    async function bootEntity(entity_id) {
        if (bootedEntities[entity_id] || !entities[entity_id]) {
            return;
        }

        const response = await EntityAPI.getEntity(entity_id);
        response.badges.forEach((badge) => {
            entities[entity_id].addBadge(new Badge(badge.id, badge.name, badge.keys.map(key => key.name)));
        })

        bootedEntities[entity_id] = true;
    }

    function addEntity(entity) {
        entities[entity.id] = entity;
    }

    function removeEntity(id) {
        delete entities[id];
    }

    return {bootEntities, bootEntity, entities, addEntity, removeEntity}
});
