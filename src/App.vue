<template>
  <div class="corpo">
    <meu-menu :routes="routes"></meu-menu>
   
    <!-- 
      Componente especial do vue-router que indica que, mediante as rotas acessadas pelos usuários,
      os componentes serão inseridos.
    -->
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import { routes } from './routes';
  import Menu from './components/shared/menu/Menu.vue';

  export default {
    data(){
      return{
        // Para cada item do array, verifica se a propriedade menu é true
        routes: routes.filter(route => route.menu)
      }
    },

    components:{
      'meu-menu': Menu
    }
  }
</script>

<style>
  .corpo{
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

</style>
 
