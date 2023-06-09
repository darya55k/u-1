//import {createRouter, createWebHistory} from 'https://unpkg.com/vue-router/dist/vue-router.mjs'
//import Vue from 'https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.esm.browser.min.js'

/* import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import ForgotView from '../views/ForgotView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'
import RegView from '../views/RegView.vue'
import VerifyView from '../views/VerifyView.vue'
import LogoutView from '../views/LogoutView.vue'
import SuccessfulRegistrationView from '../views/SuccessfulRegistrationView.vue'
import SuccessfulForgotView from "../views/SuccessfulForgotView";
import ProgramsView from '../views/ProgramsView.vue'
import ProgramsAdministrationView from '../views/programs/AdministrationView.vue'
import ProgramsEconomyView from '../views/programs/EconomyView.vue'
import ProgramsManagementView from '../views/programs/ManagementView.vue'
import ProgramsPoliticsView from '../views/programs/PoliticsView.vue'
import TransferView from '../views/TransferView.vue'
import TransferStep1View from '../views/TransferStep1View.vue'
import TransferStep2View from '../views/TransferStep2View.vue'
import TransferStep3View from '../views/TransferStep3View.vue'
import PersonalRequest121530 from '../views/PersonalRequest-121530.vue'
import PersonalRequest121531 from '../views/PersonalRequest-121531.vue'
import PersonalRequest121532 from '../views/PersonalRequest-121532.vue'
import PersonalView from '../views/PersonalView.vue'
import FavouritesView from '../views/FavouritesView.vue'
import RequestView from '../views/RequestView.vue'
import RequestByIdView from '../views/RequestByIdView.vue'
 */



//Vue.use(VueRouter)
const options = {
  moduleCache: {
    vue: Vue,
  },
  getFile(url) {
    return fetch(url).then((resp) =>
      resp.ok ? resp.text() : Promise.reject(resp)
    );
  },
  addStyle(styleStr) {
    const style = document.createElement('style');
    style.textContent = styleStr;
    const ref = document.head.getElementsByTagName('style')[0] || null;
    document.head.insertBefore(style, ref);
  },
  log(type, ...args) {
    console.log(type, ...args);
  },
};

const { loadModule } = window['vue3-sfc-loader'];

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => loadModule('src/views/HomeView.vue', options)
  }, {
    path: '/auth',
    name: 'auth',
    meta: { hideHeader: true, hideFooter: true },
    component: loadModule('src/views/AuthView.vue', options),
  }, {
    path: '/reg',
    name: 'reg',
    meta: { hideHeader: true, hideFooter: true },
    component: loadModule('src/views/RegView.vue', options),
  },
  {
    path: '/successful',
    name: 'successful',
    meta: { hideHeader: true, hideFooter: true },
    component: loadModule('src/views/SuccessfulRegistrationView.vue', options),
  }, /*{
    path: '/verify-user',
    name: 'verify-user',
    meta: { hideHeader: true, hideFooter: true },
    component: loadModule('src/views/VerifyView.vue', options),
  }, {
    path: '/logout',
    name: 'logout',
    meta: { hideHeader: true, hideFooter: true },
    component: loadModule('src/views/LogoutView.vue', options),
  },  */{
    path: '/forgot-successful',
    name: 'forgot-successful',
    meta: { hideHeader: true, hideFooter: true },
    component: loadModule('src/views/SuccessfulForgotView.vue', options),
  }, {
    path: '/forgot',
    name: 'forgot',
    meta: { hideHeader: true, hideFooter: true },
    component: loadModule('src/views/ForgotView.vue', options),
  }, /*{
    path: '/reset-password',
    name: 'reset-password',
    meta: { hideHeader: true, hideFooter: true },
    component: loadModule('src/views/ResetPasswordView.vue', options),
  }, {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: loadModule('src/views/AboutView.vue', options),
  }, {
    path: '/programs',
    name: 'programs',
    component: loadModule('src/views/ProgramsView.vue', options),
  }, {
    path: '/programs/administration',
    name: 'programsAdministration',
    component: loadModule('src/views/ProgramsAdministrationView.vue', options),
  }, {
    path: '/programs/economy',
    name: 'programsEconomy',
    component: loadModule('src/views/ProgramsEconomyView.vue', options),
  }, {
    path: '/programs/management',
    name: 'programsManagement',
    component: loadModule('src/views/ProgramsManagementView.vue', options),
  }, {
    path: '/programs/politics',
    name: 'programsPolitics',
    component: loadModule('src/views/ProgramsPoliticsView.vue', options),
  }, {
    path: '/transfer',
    name: 'transfer',
    component: loadModule('src/views/TransferView.vue', options),
  }, {
    path: '/transfer-step-1',
    name: 'transfer-step-1',
    component: loadModule('src/views/TransferStep1View.vue', options),
  }, {
    path: '/transfer-step-2',
    name: 'transfer-step-2',
    component: loadModule('src/views/TransferStep2View.vue', options),
  }, {
    path: '/transfer-step-3',
    name: 'transfer-step-3',
    component: loadModule('src/views/TransferStep3View.vue', options),
  }, {
    path: '/personal',
    name: 'personal',
    component: loadModule('src/views/PersonalView.vue', options),
  }, {
    path: '/personal/favourites',
    name: 'favourites',
    component: loadModule('src/views/FavouritesView.vue', options),
  }, {
    path: '/personal/request',
    name: 'request',
    component: loadModule('src/views/RequestView.vue', options),
  }, {
    path: '/personal/request/:id/:prg_id',
    name: 'request-by-id',
    component: loadModule('src/views/RequestByIdView.vue', options),
  }, {
    path: '/personal/request-121530',
    name: 'request-121530',
    component: loadModule('src/views/PersonalRequest121530.vue', options),
  }, {
    path: '/personal/request-121531',
    name: 'request-121531',
    component: loadModule('src/views/PersonalRequest121531.vue', options),
  }, {
    path: '/personal/request-121532',
    name: 'request-121532',
    component: loadModule('src/views/PersonalRequest121532.vue', options),
  }*/
]

const router = VueRouter.createRouter({
  // scroll to top
  scrollBehavior: function (to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      window.scrollTo(0, 0);
    }
  },
  history: VueRouter.createWebHistory(),
  routes
});
