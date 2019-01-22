/*
* Esto Representa una  tarea
* @titulo representa el titulo de la tarea
* @constructor
*/
function Tarea(titulo){
    this.titulo = titulo;
    this.yaTerminada = false;
}
 Tarea.prototype.terminada = function(){
     return this.yaTerminada;

 };
 Tarea.prototype.terminar = function(){
     this.yaTerminada = true;
 };

 /*
*Repreenta una lista de tareas
*Puede tener varias tareas las cuales 
*cada una tiene un status de completasda p no completada
*aqui esta mi constructor
 */

 function Tareas(){
     this.lista = [];
 };

 //funcion de validar si esta vacia o no
Tareas.prototype.isEmpty = function(){
    return this.lista.length ===0;
};
//funcion para agregar tarea
Tareas.prototype.agregarTarea = function(titulo){
    this.lista.push(new Tarea(titulo))
};

//funcion para obtener el taaño actual de mi lista

Tareas.prototype.size =function(){
    return this.lista.length;
};

//funcion para obtene una tarea de mi arreglo de la lista
Tareas.prototype.tarea = function(indice){
    return this.lista[indice];
};
//Remover tarea

Tareas.prototype.removerTarea = function(indiceARemover){
    return this.lista.splice(indiceARemover,1);
};