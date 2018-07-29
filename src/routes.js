// Importa os componentes
import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

// Const - quando estou exportando uma variável a mesma precisa ser uma constante
export const routes = [
  // Configurando as rotas
  // Uma rota é uma objeto js com duas propriedades
  { path: '', component: Home, titulo: 'Home' },
  { path: '/cadastro', component: Cadastro, titulo: 'Cadastro'}
];