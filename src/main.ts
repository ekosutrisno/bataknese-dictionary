import { createApp } from 'vue'
import ToastPlugin from 'vue-toast-notification';

import './style.css'
import App from './App.vue'

// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

createApp(App).use(ToastPlugin).mount('#app');
