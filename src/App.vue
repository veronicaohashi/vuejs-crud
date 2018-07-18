<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <!-- Não pode usar interpolação dentro de atributos -->
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotos">
        <div class="painel">
          <h2 class="painel-titulo">{{ foto.titulo }}</h2>
          <div class="painel-conteudo">
            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
          </div>
        </div>      
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

.imagem-reponsiva{
  width: 100%;
}
</style>
