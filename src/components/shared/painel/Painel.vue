<template>
  <div class="painel">
    <!--
      O atalho da direvita v-on é @
      @ - atalho da view para a fonte de dados 
      : - atalho da fonte de dados para a view
    -->
    <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{titulo}}</h2>
    <!-- 
      No slot não funciona a diretiva v-show
    -->
    <div class="painel-conteudo" v-show="visivel">
      <slot></slot>
    </div>
  </div>   
</template>

<script>
  export default{
    props:[
      'titulo'
    ],
    data(){
      return {
        visivel: true
      } 
    }
  }

</script>

<style scoped>
  /* estilo do painel */ 
  .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  * {
    box-shadow: 5px 5px 5px;
  }

</style>