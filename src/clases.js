class Persona{

    static get MAX_OBJ(){
        return 5;
    }

  
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        
        if (Persona.contadorPersonas < Persona.MAX_OBJ){
          this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('Se han superado el máximo de objetos permitodos')
        }
        //console.log( 'Se incrementa contador:' +  Persona.contador);
        
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
      return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

        //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica polimorfismo
        return this.nombreCompleto();
    }

    nombreCompleto(){
      return this._nombre + ' ' + this._apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
      super(nombre, apellido); 
      this._departamento = departamento;
    }

    get departamento(){
      return this._departamento;
    }
    
    set departamento(departamento){
      this._departamento = departamento;
    }

    nombreCompleto(){
      return super.nombreCompleto() + ', ' + this._departamento;
    }
} 

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);

let empleado1 = new Empleado('Maria','Jimenez','Sistemas');
console.log(empleado1.nombreCompleto());

console.log(Persona.MAX_OBJ);

let persona3 = new Persona('Mariano', 'Lara');
let persona4 = new Persona('Armando', 'Toledo');


console.log(persona3, persona4);

