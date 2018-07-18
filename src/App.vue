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

</style>
