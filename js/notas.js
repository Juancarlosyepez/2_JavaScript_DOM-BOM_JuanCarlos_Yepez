var notasJSON = [];

    window.onload=cargarEventos;

function cargarEventos(){
  document.getElementById("registro").addEventListener("click",RegistroAlumno,false);
}


    function RegistroAlumno(event){
      event.preventDefault();

      var nuevocodigo=document.getElementById("codigo").value;
      var nuevonombre=document.getElementById("nombre").value;
      var nuevonota=document.getElementById("nota").value;

      var nuevoregistro={ codigo: nuevocodigo, nombre: nuevonombre, nota: nuevonota};

      notasJSON.push(nuevoregistro);

      var cuerpotabla=document.getElementById("tablaalumno");
      var tablallena="";

      for (var i = 0; i< notasJSON.length; i++) {
        tablallena+= "<tr><td>" + notasJSON[i].codigo + "</td><td>" + notasJSON[i].nombre + "</td><td>" + notasJSON[i].nota + "</td></tr>";
      }

      cuerpotabla.innerHTML=tablallena;

    }

    function calcularNota(json){
    var suma=0;

    for (i = 0; i < json.length; i++) {
      suma+=parseInt(json[i].nota);

    }
document.getElementById("resultado").innerHTML="Nota Promedio="+suma/i;
alert("Nota Promedio="+suma/i);
    }

    function NotaMayor(json){
        var myMatriz=[];
        var my=0;
        for (i = 0; i < notasJSON.length; i++) {
          myMatriz[i]=notasJSON[i].nota;
        } myMatriz.sort();
          myMatriz.reverse();
        my = myMatriz.shift(i);
        document.getElementById("resultado").innerHTML="Nota Mayor=  "+my;
        alert("Nota Mayor=  "+my);
    }

    function NotaMenor(json){
        var mnMatriz=[];
        var mn=0;
        for (i = 0; i < notasJSON.length; i++) {
          mnMatriz[i]=notasJSON[i].nota;
        } mnMatriz.sort();
        mn = mnMatriz.shift(i);
        document.getElementById("resultado").innerHTML="Nota Menor=  "+mn;
        alert("Nota Menor=  "+mn);
    }

function promedio(){calcularNota(notasJSON)};
function Mayor(){NotaMayor(notasJSON)};
function Menor(){NotaMenor(notasJSON)};
