<template>
  <!-- Não pode usar interpolação dentro de atributos -->
  <img class="imagem-responsiva" :src="url" :alt="titulo">
</template>

<script>
  export default {
    props:{
      url:{
        required: true
      },
      titulo:{
        required: true
      }
    }
  }
</script>

<style scoped>
  .imagem-responsiva{
    width: 100%;
  }
</style>