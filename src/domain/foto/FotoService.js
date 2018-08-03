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


  // cadastra(foto) {
  //   return this._resource
  //     .save(foto);
  // }

  apaga(id) {
    return this._resource
      .delete({ id });
  }
}