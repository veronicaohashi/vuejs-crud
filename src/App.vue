<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <!-- Não pode usar interpolação dentro de atributos -->
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotos">
        <meu-painel :titulo="foto.titulo">  
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
        </meu-painel>
                
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';

export default {
  // Função data para fornecer os dados que o template precisa
  // sempre retornando um objeto javascript no qual as propriedades deste objeto são acessíveis através
  // da sintaxe de interpolação
  data(){
    return{
      titulo: 'Livros',
      fotos: [ 
        {
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/eBook-Algoritmos_large.jpg?v=1484936519',
          titulo: 'cachorro'
        }
      ]
    }
  },
  // Chave com o nome do componente que irei referenciar
  components:{
    'meu-painel': Painel
  }
}
</script>

<style>
  .corpo{
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .centralizado{
    text-align: center
  }

  .lista-fotos{
    list-style:none
  }

  .lista-fotos, .lista-fotos-item{
    display: inline-block
  }

  .imagem-reponsiva{
    width: 100%;
  }
</style>
