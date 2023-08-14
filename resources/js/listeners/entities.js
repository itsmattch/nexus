import {useEntitiesStore} from "../stores/entities.js";
import Entity from "../classes/models/Entity.js";

export function initializeEntitiesListeners() {
    const entitiesStore = useEntitiesStore();

    Echo.channel('nexus').listen('.EntityCreated', (event) => {
        entitiesStore.addEntity(new Entity(event.entity.id, event.entity.name));
    }).listen('.EntityDeleted', (event) => {
        entitiesStore.removeEntity(event.entityId);
    });
}
