/*
console.log("Hola mundo");
let miTexto:string = "Hola mundo de nuevo";
console.log(miTexto);

let tagUno:string = "<div class=\"ejemplo\">";
let tagDos:string = "<div class='ejemplo'>";

console.log(tagUno);
console.log(tagDos);

console.log("Esta es una linea\nEsta es otra linea");
console.log (`Esta es la primera linea
Esta es la segunda linea`);
console.log(`El valor de mi variable es ${miTexto}`);

let op1:number = 10;
let op2:number = 15;

console.log(`Mis variables iniciales son ${op1} y ${op2}`);

op1++;
op2+=4;

console.log(`Mis variables finales son ${op1} y ${op2}`);

let resultado: number = op1/op2;
console.log(`Resultado ${resultado}`);
console.log(`Resultado ${resultado.toPrecision(2)}`);

let varTipoDesconocido: any;
console.log(`Variable tiene valor: ${varTipoDesconocido} y es de tipo: ${typeof(varTipoDesconocido)}`);
varTipoDesconocido = "Es un string";
console.log(`Variable tiene valor: ${varTipoDesconocido} y es de tipo: ${typeof(varTipoDesconocido)}`);
varTipoDesconocido = 2.8;
console.log(`Variable tiene valor: ${varTipoDesconocido} y es de tipo: ${typeof(varTipoDesconocido)}`);

let varTipoIndefinido: undefined;
varTipoIndefinido = null;

let varVoid:void;
console.log(`Variable tiene valor ${varVoid} y es de tipo ${typeof(varVoid)}`);

function imprimirMensaje():void{
    console.log("Mensaje genérico")
}

function imprimirMensaje2(msj:string):void{
    console.log(msj);
}

imprimirMensaje();
imprimirMensaje2("Mensaje genérico 2");

function sumar (op1:number, op2:number): number{
    return op1+op2;
}

var fSumar = sumar;

console.log(sumar(10,15));
console.log(fSumar(20,25));
*/
import { Aprendiz, NivelEducativo } from './aprendiz.js';
export var ap = new Aprendiz("Andres", "Rodriguez", "avatar.png", 30, NivelEducativo.POSGRADO);
var aprendizTable = document.getElementById("aprendiz");
mostrarDatosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./" + aprendiz.avatar + "\" height = \"100\"></td><tr>\n    <tr><td>Nombres:</td><td>" + aprendiz.nombres + "</td></tr>\n    <tr><td>Apellidos:</td><td>" + aprendiz.apellidos + "</td></tr>\n    <tr><td>Nivel educativo:</td><td>" + aprendiz.nivelEducativo + "</td></tr>\n    <tr><td>Edad:</td><td>" + aprendiz.edad + "</td></tr>";
    aprendizTable.appendChild(tbodyAprendiz);
}
