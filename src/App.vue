<template>
  <div class="corpo">
    <!-- 
      Componente especial do vue-router que indica que, mediante as rotas acessadas pelos usuários,
      os componentes serão inseridos.
    -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .corpo{
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }
</style>
 
