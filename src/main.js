import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js';
import VueSplide from '@splidejs/vue-splide';
import '@/assets/scss/main.scss';

const appInstance = createApp(App);

appInstance.use(store);
appInstance.use(VueSplide);
appInstance.mount('#app');
