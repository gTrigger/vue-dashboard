import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/vue-fontawesome'
import './assets/css/main.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import {faHome, faUser, faAddressCard, faCalendarAlt, faCogs,
        faTable, faChartBar, faSearch, faTimes, faTrashAlt,
        faPlus, faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft,
        faAngleRight}
        from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faBehanceSquare, faTumblrSquare,
        faGithubSquare, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome, faUser, faAddressCard, faCalendarAlt, faCogs,
    faTable, faChartBar, faSearch, faTimes, faTrashAlt, faPlus,
    faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight,
    faFacebookSquare, faBehanceSquare, faTumblrSquare, faGithubSquare,
    faTwitter);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

Vue.component('layout', {
    template: '#page-layout',
    props: {

    },
    data: function () {

    },
    computed: {

    },
    filters: {

    },
    methods: {

    }
});