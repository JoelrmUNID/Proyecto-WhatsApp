function duplicate() {
    var str_html = "";
    var deb =document.querySelector('.copy').innerHTML; //genera la variable de la clase .copy
    console.log(deb);//log in consol class row innerHTML
     str_html +=deb;
       console.log(str_html);//log in consol class row innerHTML plis div 
       document.querySelector('body').innerHTML += str_html; 
};
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
