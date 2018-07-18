<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <!--
      v-on    -> data binding de evento que vai da view para a fonte de dados
      $event  -> objeto especial do vue.js que sabe tudo sobre o evento disparado (no caso evento input)
      .target -> quem disparou o evento (no caso a própria tag input)
      .value  -> valor do input
    -->
    <input type="search" v-on:input="filtro = $event.target.value" class="filtro" placeholder="Filtrar">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotos">
        <meu-painel :titulo="foto.titulo">  
          <!-- Não pode usar interpolação dentro de atributos -->
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
      fotos: [],
      filtro: ''
    }
  },
  // Cria o componente
  created(){
    // Acessa o próprio componente
    // $http -> só exite dentro do meu componente por conta do vue-resource
    // Retorna uma promise e não a lista de fotos
    let promise = this.$http.get('http://localhost:3000/v1/fotos');
    promise
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
    // promise.then(res => {
    //   res.json().then(fotos => this.fotos = fotos);
    // });
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

  .imagem-responsiva{
    width: 100%;
  }

  .filtro{
    display: block;
    width: 100%;
  }
</style>
