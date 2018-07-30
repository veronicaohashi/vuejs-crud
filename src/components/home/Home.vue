<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <!--
      v-on    -> data binding de evento que vai da view para a fonte de dados
      $event  -> objeto especial do vue.js que sabe tudo sobre o evento disparado (no caso evento input)
      .target -> quem disparou o evento (no caso a própria tag input)
      .value  -> valor do input
    -->
    <input type="search" @input="filtro = $event.target.value" class="filtro" placeholder="Filtrar">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">  
          <!--
            Na diretiva posso enviar um objeto js: v-meu-transform="{ incremento: 15, animacao: true }"
            Ou utilizar o modificador da diretiva
          -->
          <imagem-responsiva v-meu-transform.animacao.reverse="15" :url="foto.url" :titulo="foto.titulo"/>
          <!--
            No elemento confirmacao utiliza-se o databinding para que se avalie a expressão
          -->
          <meu-botao 
          tipo="button" 
          rotulo="REMOVER"
          @botaoAtivado="remove(foto)"
          :confirmacao="true"
          estilo="perigo"/>
        </meu-painel>   
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';

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
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao

  },

  // Método para computar valor
  computed: {
    fotosComFiltro(){
      // Atalho para acessar a propriedade retornada pela função data()
      if (this.filtro) {
        // Filtrar
        // Expressao regular
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else{
        // Retorna a lista inteira de fotos sem ser filtrada
        return this.fotos; 
      }     
    }
  },

  methods:{
    remove(foto){
      alert("remove a foto " + foto.titulo);
    }
  }
}
</script>

<style>


  .centralizado{
    text-align: center
  }

  .lista-fotos{
    list-style:none
  }

  .lista-fotos, .lista-fotos-item{
    display: inline-block
  }


  .filtro{
    display: block;
    width: 100%;
  }
</style>
