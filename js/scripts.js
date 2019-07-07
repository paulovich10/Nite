
// inicialización
$(window).on('load', function(){

	$('#overlay').fadeOut(800);
});



//imagen aparece por un lado
$(window).on('scroll', function(){

let scrollUsuario = $(window).scrollTop();

let profundidad = $('#fotografaRojo').offset().top - $(window).innerHeight() * .6;

	if (scrollUsuario > profundidad) {

		$('#fotografaRojo').addClass('visible');
	}

});

// validación formulario
$('form').on('submit', function(e){

		let nombre = $('#campoNombre').val();
		let email = $('#campoEmail').val();
		let mensaje = $('#campoMensaje').val();

		if (nombre.length < 2) {

			mostrarError("El nombre está vacío");
			e.preventDefault();
		}

		if (mensaje.length < 10) {

			mostrarError("El mensaje está vacío");
			e.preventDefault();
		}

		if (email.includes('@') == false || email.includes('.') == false) {

			mostrarError("El email no es correcto");
			e.preventDefault();
		}

	});



function mostrarError(mensaje){

	$('#alerta p').text(mensaje);

	$('#alerta').addClass("visible");

	setTimeout(function(){				
		$('#alerta').removeClass("visible");
	}, 3000);
}

//carga de documento
$(document).ready(function(){

//desciende con barra de menu
$('.desplazar').on('click', function(){

	let id = $(this).data('nivel');			
	let profundidad = $(id).offset().top;

	$('html').animate({
		scrollTop: profundidad
	}, 1000);

});


//menu responsive
$('.barras').on('click', muestraMenu);
$('#cerrar').on('click', muestraMenu);
$('.desplazar').on('click', muestraMenu);



	function muestraMenu() {
	$('nav').toggleClass('abierto');
}

//slider galería
var slider = $('#slider');
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

$('#slider section:last').insertBefore('#slider section:first')

slider.css('margin-left','-'+100+'%');

function moverD(){
	slider.animate({marginLeft:'-'+200+'%'}, 700,function(){
		$('#slider section:first').insertAfter('#slider section:last');
		slider.css('margin-left','-'+100+'%');

	});

}

function moverI(){
	slider.animate({marginLeft:0}, 700,function(){
		$('#slider section:last').insertBefore('#slider section:first');
		slider.css('margin-left','-'+100+'%');


	});

}

siguiente.on('click',function (){
	moverD();

});

anterior.on('click',function (){
	moverI();

});

function autoplay() {
	interval = setInterval(function(){
		moverD();
		}, 5000);
}

autoplay();


});
