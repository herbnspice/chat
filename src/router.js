import { createWebHistory, createRouter  } from "vue-router";
import { porjectAuthentication } from "./firebase/config";

// auth guard
const requiredAuth  = ( to, from, next ) => {
    let user = porjectAuthentication.currentUser
    if( !user ){
        next({ name: 'Welcome'})
    }
    next()
}
const requireNoAuth = ( to, from, next ) => {
    let user = porjectAuthentication.currentUser
    if( user ){
        next({ name: 'Chatroom'})
    }
    next()
}

const routes = [
    {
        path: "/",
        name: "Welcome",
        component: () => import(/* webpackChunkName: "about" */ '@/views/Welcome.vue'),
        beforeEnter: requireNoAuth
    },
    {
        path: "/chatroom",
        name: "Chatroom",
        component: () => import(/* webpackChunkName: "about" */ '@/views/Chatroom.vue'),
        beforeEnter: requiredAuth
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;