export default class FotoService {

  constructor(resource) {
    this._resource = resource('v1/fotos{/id}');
  }

  lista() {
    // Retorno a promisse devolvida pelo then
    return this._resource
      .query()
      .then(res=>res.json());

  }

  cadastra(foto) {
    return this._resource
      .save(foto);
  }

  busca(id){
    return this._resource
      .get({ id })
      .then(res=>res.json());
  }

  apaga(id) {
    return this._resource
      .delete({ id });
  }
}