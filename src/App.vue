<template>
  <div class="corpo">
    <nav>
      <ul>
        <li v-for="route in routes">
          <router-link :to="route.path ? route.path : '/'">{{ route.titulo }}</router-link>
        </li>
      </ul>
    </nav>
   
    <!-- 
      Componente especial do vue-router que indica que, mediante as rotas acessadas pelos usuários,
      os componentes serão inseridos.
    -->
    <router-view></router-view>
  </div>
</template>

<script>
  import { routes } from './routes';

  export default {
    data(){
      return{
        routes
      }
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
 
