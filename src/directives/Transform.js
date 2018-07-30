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
      let incremento = binding.value || 90;
      let efeito;
      // Vai fazer o rotate por padrão
      if (!binding.arg || binding.arg == 'rotate'){
        if (binding.modifiers.reverse)
          current -= incremento; 
        else 
          current += incremento;
        efeito = `rotate(${current}deg)`;
      } else if (binding.arg = 'scale') {
        efeito = `scale(${incremento})`;
      }

      el.style.transform = efeito;
      if (binding.modifiers.animacao) el.style.transition = 'transform 0.5s';

    })
  }
})