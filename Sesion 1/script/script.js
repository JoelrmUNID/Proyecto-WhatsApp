





///////////////////////////LLAMADO DE FUNCIONES MENDIANTE DATA VIEW//////////////////////////////////// SIN NECESIDAD DE ONCLICK EN HTML

document.addEventListener('DOMContentLoaded', function(){

 
  //empieza LA funcion GENERAL    
    document.querySelectorAll('#bottom-line').forEach(function (div) {  //se van especificando la funcion que se aplicara en cada elemento con el ID boton-line identificado con #
        
        div.onclick=function(){
            console.log(div.dataset.view)
            //Aquí van las funciones
            
            if(div.dataset.view=="chats"){
              muestrachats();
            }
           
            if(div.dataset.view=="estados"){
              muestraestados();
            }
            
            if(div.dataset.view=="llamadas"){
              muestrallamadas();
            }
            
        };
    
        /*document.querySelector('.appname').onclick(duplicate());*/
    
    
    }); //TERMINA LA funcion GENERAL
  
///////////////////////////TERMINA LLAMADO DE FUNCIONES



});

///////////////////////////////////////SECCION DE FUNCIONES///////////////////////////////////////////////

function muestrachats(){      //funcion para mostrar activa la parte de chat
  //esconde
  document.querySelector('.copy').style.display= "block";               //activo
  //esconde
  document.querySelector('.copyllamadas').style.display= "none";          //no visible
  
  //muestra
  document.querySelector('.copyestados').style.display= "none";
  }

function muestraestados(){   //funcion para mostrar activa la parte de estados
//esconde
document.querySelector('.copy').style.display= "none";         //no visible
//esconde
document.querySelector('.copyllamadas').style.display= "none"; //no visible

//muestra
document.querySelector('.copyestados').style.display= "block";  //activo
}

function muestrallamadas(){            //funcion para mostrar activa la parte de chat
  //esconde
  document.querySelector('.copy').style.display= "none";
  //esconde
  document.querySelector('.copyllamadas').style.display= "block";
  
  //muestra
  document.querySelector('.copyestados').style.display= "none";
  }
  

  


/////////////////////FUNCION PARA DUPLICAR EL RENGLON EN CHATS////////////////////////////////
function duplicate() {
    var str_html = "";
    var deb =document.querySelector('.copy').innerHTML; //genera la variable de la clase .copy
    console.log(deb);//log in consol class row innerHTML
     str_html +=deb;
       console.log(str_html);//log in consol class row innerHTML plis div 
       document.querySelector('body').innerHTML += str_html; 
};
/////////////////////TERMINA FUNCION PARA DUPLICAR EL RENGLON EN CHATS////////////////////////////////





//subraya el titulo Estados y llamadas identificados con un ID dentro de la calase menu

function activetab(){ 
    var tabestados=document.querySelectorAll('#bottom-line');
    for(var i=0; i<tabestados.length; i++){
        tabestados[i].style.borderBottom = '3px solid green';
           }
   // console.log(tabestados[i]);
    tabestados[1].style.borderBottom = '3px solid white';
}

function activetab2(){
    var tabestados=document.querySelectorAll('#bottom-line');
    for(var i=0; i<tabestados.length; i++){
        tabestados[i].style.borderBottom = '3px solid green';
           }
   // console.log(tabestados[i]);
    tabestados[2].style.borderBottom = '3px solid white';
}



//TERMINA EL SUBRAYADO el titulo Estados y llamadas identificados con un ID dentro de la calase menu
