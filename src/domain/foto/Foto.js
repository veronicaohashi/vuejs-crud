// Módulo que exporta a classe foto
export default class Foto {
  // let foto = new Foto() - o objeto foto vai possuir os atributos em branco
  constructor(titulo='', url='', descricao=''){
    this.titulo    = titulo;
    this.url       = url;
    this.descricao = descricao;
  }
}