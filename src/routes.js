// Importa os componentes
// import Cadastro from './components/cadastro/Cadastro.vue';
// O meu componente torna-se uma função que sabe retornar um componente
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue');
import Home from './components/home/Home.vue';

// Const - quando estou exportando uma variável a mesma precisa ser uma constante
export const routes = [
  // Configurando as rotas
  // Uma rota é uma objeto js com duas propriedades
  { path: ''           , name: 'home'    , component: Home     , titulo: 'Home'   , menu: true },
  { path: '/cadastro/' , name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true }, 
  { path: '/cadastro/:id', name: 'altera', component: Cadastro, titulo: 'Cadastro'},
  { path: '*', component: Home, menu: false }
];