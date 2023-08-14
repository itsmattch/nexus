import {createApp} from 'vue';
import {createPinia} from 'pinia';
import router from './router/index.js';
import App from "./App.vue";
import axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import {initializeEntitiesListeners} from "./listeners/entities.js";
import {useEntitiesStore} from "./stores/entities.js";

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Pusher = Pusher;
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    wsHost: window.location.hostname,
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
});

const app = createApp(App);
app.use(createPinia())
app.use(router)
app.mount('#app');

await useEntitiesStore().boot();

initializeEntitiesListeners();
