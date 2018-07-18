<template>
  <div>
    <h1>{{ titulo }}</h1>
    <!-- Não pode usar interpolação dentro de atributos -->
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // Função data para fornecer os dados que o template precisa
  // sempre retornando um objeto javascript no qual as propriedades deste objeto são acessíveis através
  // da sintaxe de interpolação
  data(){
    return{
      titulo: 'Livros',
      fotos: []
    }
  },
  created(){
    alert('Criei o componente');
  }
}
</script>

<style>

</style>
