import { createApp } from 'vue'
import App from './App.vue'
import { porjectAuthentication } from './firebase/config'
import router from './router'
let app 

porjectAuthentication.onAuthStateChanged( ()=> {
   if(!app){
    app = createApp(App)
    .use(router)
    .mount('#app')
   } 
})


