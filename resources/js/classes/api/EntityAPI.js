export default class EntityAPI {

    static async getEntities() {
        const response = await axios.get('/api/entities');
        return response.data;
    }

    static async getEntity(id) {
        const response = await axios.get('/api/entities/' + id);
        return response.data;
    }

    static async createEntity(name) {
        const response = await axios.post('/api/entities', {name: name});
        return response.data;
    }

    static async removeEntity(id) {
        const response = await axios.delete('/api/entities/' + id);
        return response.data;
    }
}
