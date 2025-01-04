// cronômetro
var data = new Date();
var semana = ["Domingo", "Segunda", "terça", "Quarta", "Quinta", "Sexta", "Sábado"];

var dataFutura = new Date("August 22, 2024 12:00").getTime();
var dias, horas, minutos, segundos;


setInterval(function(){
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
},1000);

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

//saiba mais no carousel

document.addEventListener("DOMContentLoaded", function() {
    const lerMaisLinks = document.querySelectorAll('.ler-mais');
    
    lerMaisLinks.forEach(link => {
        link.addEventListener('click', function() {
            const item = this.closest('.item');
            const moreText = this.previousElementSibling;
            
            if (moreText.style.display === "none" || moreText.style.display === "") {
                moreText.style.display = "inline";
                item.classList.add('expandido');
                this.textContent = "Ler menos";
            } else {
                moreText.style.display = "none";
                item.classList.remove('expandido');
                this.textContent = "Ler mais";
            }
        });
    });
});



   
    
