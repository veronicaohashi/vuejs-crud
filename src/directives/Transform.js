import Vue from 'vue';

Vue.directive('meu-transform',{
  // Obejto js com as configurações da diretiva
  // O método bind é um gancho da diretiva que é chamado toda vez que a diretiva é associada ao elemento do DOM
  // el - Referência do elemento do DOM no qual a diretiva foi associada
  bind(el, binding, vnode){
    // Como o bind é chamado assim que associado com o elemento, a variável current vai ser o eixo 
    // padrão que a diretiva irá considerar
    let current = 0;
    el.addEventListener('dblclick', function(){
      let incremento = 0;
      let animacao = false;

      if (binding.value){
        incremento = binding.value.incremento;
        animacao   = binding.value.animacao;
      }

      current += incremento;
      if (animacao) el.style.transition = 'transform 0.5s';
      el.style.transform = `rotate(${current}deg)`;
    })
  }
})