

jQuery(document).ready(function(){

  jQuery('#carouselExampleIndicators').carousel({
    interval: 2000,
    pause: "hover"
  })

jQuery('carouselcatering').carousel({
  interval:2000,
  pause: "hover"
})

});



/**funcion que muestra y oculta la barra principal */
function ocultar(){

  document.querySelector('nav.prueba').style.display= "none";
}


window.onscroll = function() {scrollFunction()};


function scrollFunction() {
if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
  document.querySelector('nav.prueba').style.transition= "ease 1s ";

  document.querySelector('nav.prueba').style.display= "block";

  document.querySelector("nav.prueba").style.top = "0";
} else {
  document.querySelector("nav.prueba").style.top = "-110px";
}
}


/**funcion para cambiar icono de suma en menu */


//que todos los enlaces solo aparezcan el mas
document.querySelector('.uno .fa-minus').style.display="none";
document.querySelector('.uno .fa-plus').style.display="block";
document.querySelector('.dos .fa-minus').style.display="none";
document.querySelector('.dos .fa-plus').style.display="block";
document.querySelector('.tres .fa-minus').style.display="none";
document.querySelector('.tres .fa-plus').style.display="block";
document.querySelector('.cuatro .fa-minus').style.display="none";
document.querySelector('.cuatro .fa-plus').style.display="block";


/*

if (  && ) {


}else{


}

*/

//arreglo para hacer mas tarde


//cuando se le da click a cada uno 
document.addEventListener("click", function(e){
  var x=e.target.childNodes[2].textContent;
  

  

  if (x==='Entradas') {
    prueba('.uno');
  }else if(x==='Plato Fuerte'){
   prueba('.dos');
  }else if(x==='Bebidas'){
    prueba('.tres');
  }else if(x==='Postres'){
    prueba('.cuatro');
  }

});



function prueba(sel){


  if (sel === '.uno'){

    var a=('.uno .fa-minus');
    var b=('.uno .fa-plus');
    var c=('.uno h1');

  }else if(sel === '.dos'){

    var a=('.dos .fa-minus');
    var b=('.dos .fa-plus');
    var c=('.dos h1')
  }else if(sel === '.tres'){

    var a=('.tres .fa-minus');
    var b=('.tres .fa-plus');
    var c=('.tres h1');

  }else if(sel === '.cuatro'){

    var a=('.cuatro .fa-minus');
    var b=('.cuatro .fa-plus');
    var c=('.cuatro h1');

  }
   
  document.querySelector(a).style.display="none";
  document.querySelector(b).style.display="block";

  

    var hola=document.querySelector(sel).getAttribute('aria-expanded');

    document.querySelector(b).style.display="none";


    if (hola ==='false'){

      document.querySelector(c).style.background="linear-gradient(90deg, rgba(255,255,255,1) 0%,  #000000, 85%, rgba(255,255,255,1) 100%)";

      document.querySelector(a).style.display="block";

    
    }else{
      document.querySelector(c).style.background="";

     document.querySelector(a).style.display="none";
     document.querySelector(b).style.display="block";
    }


  }


$(function(){

  var map = L.map('mapa').setView([11.014003, -74.805871], 17);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([11.014003, -74.805871]).addTo(map)
      .bindPopup('Visitenos.<br> Restaurante NATIVA.')
      .openPopup();

});