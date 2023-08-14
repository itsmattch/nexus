export default class EntityAPI {

    static async getEntities() {
        try {
            const response = await axios.get('/api/entities');
            return response.data;
        } catch (error) {
            //
        }
    }

    static async createEntity(name) {
        try {
            const response = await axios.post('/api/entities', {name: name});
            return response.data;
        } catch (error) {
            //
        }
    }

    static async removeEntity(id) {
        try {
            const response = await axios.delete('/api/entities/' + id);
            return response.data;
        } catch (error) {
            //
        }
    }
}
