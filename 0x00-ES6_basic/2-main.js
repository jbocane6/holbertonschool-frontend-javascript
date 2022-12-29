function GetListaDeBarrios() {
  this.bogotaBarrios = ['Suba', 'Bosa'];

  const self = this;
  this.addBarrio = function add(barrioNuevo) {
    self.bogotaBarrios.push(barrioNuevo);
    return self.bogotaBarrios;
  };
}

const listaDeBarrios = new GetListaDeBarrios();
const res = listaDeBarrios.addBarrio('Usaquén');
console.log(res);
