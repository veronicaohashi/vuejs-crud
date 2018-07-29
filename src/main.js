// Core do VUE - Global Vue Object
import Vue from 'vue'
// Por utilizar export default o nome do artefato importado deve
// ser o mesmo do arquivo
import App from './App.vue'

// Regitro do vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);

// Registro do vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Registro do routes
import {routes} from './routes';
// Com o auxílio do vue-router, passo as rotas configuradas e ele vai devolver um roteador que será utilizado
// pela aplicação. propriedade routes = routes
const router = new VueRouter({ routes });

// Vue instance, criada com o auxilio do global vue object
// A vue instance é a ponto entre o componente e a view 
new Vue({
  // Objeto de configuração
  el: '#app',                 // Elemento no qual será colocado o componente: id="app"
  // router,                  
  render: h => h(App)         // Função render passando o componente que será renderizado
})
