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

import {Aprendiz, NivelEducativo} from './aprendiz.js';
import {Curso} from './curso.js';

let cursos = [new Curso("Prácticas esenciales para el agilismo", 20, 90, true, 2019),
new Curso("Ingenieria de software para la web", 15, 99, true, 2018),
new Curso("Pruebas automatizadas", 25, 50, false, 2020),
new Curso("Principios de diseño y arquitectura", 30, 75, true, 2020)];

export const ap = new Aprendiz ("Andres", "Rodriguez", "avatar.png", 30, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;
let cursosTable: HTMLElement = document.getElementById("cursos")!;
let btnfiltro: HTMLElement = document.getElementById("boton-filtro")!;
let textoBusqueda: HTMLInputElement = <HTMLInputElement>document.getElementById("texto-busqueda")!;

btnfiltro.onclick = () => {
    let text:string = textoBusqueda.value;
    text = (text==null)?"":text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[] = ap.cursos.filter(c => c.nombre.match(text));
    mostrarCursosAprendiz(cursosFiltrados);
}

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);

/*
function filtrarPorNombre():void{
    let text:string = textoBusqueda.value;
    text = (text==null)?"":text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[] = ap.cursos.filter(function(c){return c.nombre.match(text);})
    mostrarCursosAprendiz(cursosFiltrados);
}
*/

function mostrarDatosAprendiz(aprendiz:Aprendiz):void{
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `<tr><td colspan=2><img src="./${aprendiz.avatar}" height = "100"></td><tr>
    <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`
    aprendizTable.appendChild(tbodyAprendiz);
    
}

function mostrarEstadisticas(aprendiz:Aprendiz):void{
    let numeroCertificados:number = aprendiz.darCursosCertificados();
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Cursos certificados</b></td><td>${numeroCertificados}</td>`
    estadisticasTable.appendChild(trElement); 
}

function mostrarCursosAprendiz(cursos:Curso[]):void{
    let cursosTbody:HTMLElement = document.createElement("tbody");
    let estado:string[] = cursos.map(c => (c.calificacion>60)?'green':'red');
    let index: number=0;
    for (let curso of cursos)
    {
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${curso.nombre}</td>
        <td>${curso.horas}</td>
        <td style="color:${estado[index]}">${curso.calificacion}</td>
        <td>${curso.certificado}</td>
        <td>${curso.anio}</td>`
        cursosTbody.appendChild(trElement); 
        index++;
    }

    cursosTable.appendChild(cursosTbody);
}
