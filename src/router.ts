import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home.vue';
import CidadeList from '@/views/cidade-list.vue';
import ClientList from  '@/views/cliente-list.vue';
import AgenciaList from '@/views/agencia-list.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cidades',
      component: CidadeList
    },
    {
      path: '/clientes',
      component: ClientList
    },
    {
      path: '/agencias',
      component: AgenciaList
    }
  ],
});
