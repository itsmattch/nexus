export default class Entity {

    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.badges = [];
    }

    addBadge(badge) {
        this.badges.push(badge);
    }

    removeBadge(badgeId) {
        this.badges = this.badges.filter(badge => badge.id !== badgeId);
    }
}
