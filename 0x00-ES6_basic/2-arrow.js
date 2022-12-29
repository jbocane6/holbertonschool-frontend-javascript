function GetListaDeBarrios() {
  this.bogotaBarrios = ['Suba', 'Bosa'];

  this.addBarrio = (barrioNuevo) => {
    this.bogotaBarrios.push(barrioNuevo);
    return this.bogotaBarrios;
  };
}

const listaDeBarrios = new GetListaDeBarrios();
const res = listaDeBarrios.addBarrio('Usaquén');
console.log(res);
