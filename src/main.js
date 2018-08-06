// Core do VUE - Global Vue Object
import Vue from 'vue'
// Por utilizar export default o nome do artefato importado deve
// ser o mesmo do arquivo
import App from './App.vue'
// Regitro do vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = process.env.API_ENDPOINT ? process.env.API_ENDPOINT : 'http://localhost:3000';
// Registro do vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// Registro do routes
// Como no routes.js não foi utilizado o export default, não podemos utilizar um elemento padrão, por isso
// utiliza-se as {} para dizer o que eu quero importar do módulo
import {routes} from './routes';
// Registro da diretiva transform
import './directives/Transform';
// Registro do pt_Br
import msg from './pt_BR';
// Registro do vee-validade
import VeeValidate, { Validator } from 'vee-validate';
Validator.localize('pt_BR', msg);
Vue.use(VeeValidate);
// Registro do bootstrap
import 'bootstrap/dist/css/bootstrap.css';



// Com o auxílio do vue-router, passo as rotas configuradas e ele vai devolver um roteador que será utilizado
// pela aplicação. propriedade routes = routes
const router = new VueRouter({ 
  routes,
  mode: 'history'            // Para remover o # 
});

// Vue instance, criada com o auxilio do global vue object
// A vue instance é a ponto entre o componente e a view 
new Vue({
  // Objeto de configuração
  el: '#app',                 // Elemento no qual será colocado o componente: id="app"
  router,                     // Elemento router que possui todas as rotas mapeadas              
  render: h => h(App)         // Função render passando o componente que será renderizado
})
