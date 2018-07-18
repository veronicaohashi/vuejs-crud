// Core do VUE - Global Vue Object
import Vue from 'vue'
// Por utilizar export default o nome do artefato importado deve
// ser o mesmo do arquivo
import App from './App.vue'

// Regitro do vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);

// Vue instance, criada com o auxilio do global vue object
// A vue instance é a ponto entre o componente e a view 
new Vue({
  // Objeto de configuração
  el: '#app',                 // Elemento no qual será colocado o componente: id="app"
  render: h => h(App)         // Função render passando o componente que será renderizado
})
