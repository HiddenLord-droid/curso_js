/* function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
      return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Juan', 'Perez', 'jperez@gmail.com');
console.log(padre.nombreCompleto());

let madre = new Persona('Maria','Quintero','lquintero@mail.com');
console.log( madre.nombreCompleto()); */

//USO de CALL 

let persona1 = {
  nombre: 'Juan',
  apellido: 'Perez',
  nombreCompleto: function(titulo, tel){
    //return this.nombre + ' ' + this.apellido;
    return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
  }
}

let persona2 = {
  nombre: 'Carlos',
  apellido: 'Lara'
}

console.log(persona1.nombreCompleto('Lic', '44223311'));
//console.log(persona1.nombreCompleto.call(persona2, 'Ing', '5544332211'));
//console.log(persona1.nombreCompleto());
let arreglo = ['Ing', '44553421'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));

