import {createApp} from 'vue';
import {createPinia} from 'pinia';
import router from './router/index.js';
import App from "./App.vue";
import axios from 'axios';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = createApp(App);

app.use(createPinia())
app.use(router)
app.mount('#app');

