export default class Emitter {
    constructor() {
        this.events = {};
    }

    on(type, listener) {
        const eventListeners = this.events[type] = this.events[type] || [];
        eventListeners.push(listener);
    }

    emit(type) {
        const eventListeners = this.events[type];
        if (eventListeners) {
            eventListeners.forEach(listener => {
                listener();
            });
        }
    }
}
