import { createApp } from 'vue'
import App from './App.vue'
import GlobalPlugin from './assets/plugins/GlobalPlugin.js';


const app = createApp(App);
app.use(GlobalPlugin);

app.mount('#app')
