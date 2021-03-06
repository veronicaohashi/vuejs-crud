export default class FotoService {

  constructor(resource) {
    this._resource = resource('v1/fotos{/id}');
  }

  lista() {
    // Retorno a promisse devolvida pelo then
    return this._resource
      .query()
      .then(res=>res.json(), err=>{
        console.log(err);
        throw new Error('Noi foi possível exibir as fotos');
      });

  }

  cadastra(foto) {
    if (foto._id){
      return this._resource
        .update( { id: foto._id }, foto)

    } else {
      return this._resource
        .save(foto);
    }
  }

  busca(id){
    return this._resource
      .get({ id })
      .then(res=>res.json());
  }

  apaga(id) {
    return this._resource
      .delete({ id })
      .then(null, err => {
          console.log(err);
          throw new Error('Não foi possível remover a foto');
      });
  }
}