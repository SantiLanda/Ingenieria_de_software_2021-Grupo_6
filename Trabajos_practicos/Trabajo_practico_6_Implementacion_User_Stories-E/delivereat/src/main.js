import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery'
import { DropdownPlugin, TablePlugin, CardPlugin, NavPlugin, NavbarPlugin, CarouselPlugin } from 'bootstrap-vue'
import DeliverEatAppNavBar from './components/DeliverEatAppNavbar.vue';

Vue.use(VueRouter)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
Vue.use(CardPlugin)
Vue.use(NavPlugin)
Vue.use(NavbarPlugin)
Vue.use(CarouselPlugin)

Vue.config.productionTip = false

const routes = [
  { path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */'./App.vue'),
    meta: {
      title: 'Inicio DeliverEat'
    }
  },

  { path: '/carrito',
    name: 'Confirmar carrito',
    component: () => import(/* webpackChunkName: "Confirmar carrito" */'./pantallas/seleccionar_carrito.vue'),
    meta: {
      title: 'Confirmar compra'
    }
  },

  { path: '/pago',
    name: 'Datos de pago',
    component: () => import(/* webpackChunkName: "Datos de pago" */'./pantallas/pago.vue'),
    meta: {
      title: 'Ingresar datos de pago'
    }
  },

  { path: '/checkout',
    name: 'Confirmacion pedido',
    component: () => import(/* webpackChunkName: "Confirmacion pedido" */'./pantallas/confirmacion.vue'),
    meta: {
      title: 'Pedido realizado'
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

// eslint-disable-next-line
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'DeliverEat!';
  next();
});

Vue.component('DeliverEatNavBar', DeliverEatAppNavBar);

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')
