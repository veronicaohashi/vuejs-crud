<template>
  <button @click="disparaAcao()" class="botao" :class="styleBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>
  export default {
    props: {
      tipo:{
        required: true,
        type: String
      },
      rotulo:{
        required: true,
        type: String
      },
      confirmacao: Boolean,
      estilo: String
    },

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
    },

    computed:{
      styleBotao(){
        if (this.estilo == 'padrao' || !this.estilo) return 'botao-padrao';
        if (this.estilo == 'perigo') return 'botao-perigo';
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
