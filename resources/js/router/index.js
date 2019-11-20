import Vue from 'vue'
import Router from 'vue-router'

/**
 * Use Router
 */
Vue.use(Router);



/**
 * Register template pages
 */
import Layout from '../components/Layout/Layout';
import Example from '../components/prueba/Example';

/**
 * Router Phase
 */

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'Home',
            path: '/',
            redirect: '/login'
        },
        {
            name: 'Login',
            path: '/login',
            component: Layout
        },
        {
            name: 'Layout',
            path: '/layout',
            component: Layout
        },
        {
            name: 'Prueba',
            path: '/prueba',
            component: Example
        },
    ]
});

export default router;