import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router);

import Login from "./components/UI/Login.vue"
import Emploi from "./components/UI/EmploiTemps.vue"
import Accueil from "./components/UI/Accueil.vue"
import Evenement from "./components/UI/Evenement.vue"
import Absence from "./components/UI/Absence.vue"
import Cours from "./components/UI/Cours.vue"
import Messagerie from "./components/UI/Messagerie.vue"
import Note from "./components/UI/Note.vue"
import Profile from "./components/UI/Profile.vue"
import Payments from "./components/UI/Payments.vue"


export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/accueil',
            component: Accueil
        },
        {
            path: '/emploi',
            component: Emploi
        },
        {
            path: '/cours',
            component: Cours
        },
        {
            path: '/evenement',
            component: Evenement
        },
        {
            path: '/messagerie',
            component: Messagerie
        },
        {
            path: '/absence',
            component: Absence
        },
        {
            path: '/note',
            component: Note
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/payments',
            component: Payments
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return {
            left: 0,
            top: 0
        }
    }
})
// router.beforeEach((to, from, next) => {
//     const publicPages = ['/login', '/register', '/home'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('UserData');

//     // trying to access a restricted page + not logged in
//     // redirect to login page
//     if (authRequired && !loggedIn) {
//         next('/login');
//     } else {
//         next();
//     }
// });
export default router