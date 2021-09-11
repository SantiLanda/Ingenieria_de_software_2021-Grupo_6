import { createRouter, createWebHistory  } from 'vue-router'
import seleccionar_carrito from '../components/seleccionar_carrito.vue'

const routes = [
  { path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */'../App.vue'),
    meta: {
      title: 'Simply BLG'
    }
  },
  
  { path: '/carrito',
    name: 'carrito',
    component: seleccionar_carrito,
    meta: {
      title: 'confirmar_carrito'
    }
  }
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
    routes: routes
  })

export default router