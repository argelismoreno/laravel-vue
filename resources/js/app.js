/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
 
require('./bootstrap');

window.Vue = require('vue');

import router from './router/index.js'

import App from './app.vue'


import vuetify from './plugins/vuetify'

const app = new Vue({
    router,
    vuetify,
    components: {App},
    el: '#app'
});
