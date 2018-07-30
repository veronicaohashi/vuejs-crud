<template>
  <button @click="disparaAcao()" class="botao botao-perigo" :type="tipo">{{ rotulo }}</button>
</template>

<script>
  export default {
    props: [
      'tipo',
      'rotulo'
    ],

    methods:{
      disparaAcao(){
        if (confirm('Confirma operação?')){
          // $emit - artefato que permite disparar um evento 
          this.$emit('botaoAtivado');
        }
      }
    }
  }
</script>

<style scoped>
  .botao{
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
  }

  .botao-perigo{
    background: firebrick;
    color: white;
  }

  .botao-padrao{
    background: darkcyan;
    color: white;
  }
</style>
