export default class BadgeAPI {

    static async getBadges() {
        const response = await axios.get('/api/badges');
        return response.data;
    }

    static async createBadge(entity_id, name, keys) {
        const response = await axios.post('/api/badges', {name: name, entity_id: entity_id, keys: keys});
        return response.data;
    }

    static async removeBadge(id) {
        const response = await axios.delete('/api/badges/' + id);
        return response.data;
    }
}
