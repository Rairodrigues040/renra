// cronômetro
var data = new Date();
var semana = ["Domingo", "Segunda", "terça", "Quarta", "Quinta", "Sexta", "Sábado"];

var dataFutura = new Date("August 22, 2024 12:00").getTime();
var dias, horas, minutos, segundos;


/*setInterval(function(){
    var dataAtual = new Date().getTime();

    var segundosTotal = (dataFutura - dataAtual)/1000;

    dias = parseInt(segundosTotal/86400);
    segundosTotal = segundosTotal%86400;

    horas = parseInt(segundosTotal/3600);
    segundosTotal = segundosTotal%3600;

    minutos = parseInt(segundosTotal/60);
    segundos = parseInt(segundosTotal%60);
    console.log(segundos);

    document.querySelector(".dias").innerHTML = dias;
    document.querySelector(".horas").innerHTML = horas;
    document.querySelector(".minutos").innerHTML = minutos;
    document.querySelector(".segundos").innerHTML = segundos;
},1000);*/

//carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})





   
    
