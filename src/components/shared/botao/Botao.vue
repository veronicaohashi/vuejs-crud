<template>
  <button @click="disparaAcao()" class="botao botao-perigo" :type="tipo">{{ rotulo }}</button>
</template>

<script>
  export default {
    props: [
      'tipo',
      'rotulo',
      'confirmacao'
    ],

    methods:{
      disparaAcao(){
        if (this.confirmacao){                                        // Precisa de Confirmação?
          // Precisa de confirmação
          if (('Confirma operação?')){
            // $emit - artefato que permite disparar um evento 
            this.$emit('botaoAtivado');
          }
          return;
        }
        // Não precisa de confimação
        this.$emit('botaoAtivado');
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
