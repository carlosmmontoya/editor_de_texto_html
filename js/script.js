
/*=============================================
BANNER
=============================================*/

$(".fade-slider").jdSlider({

	isSliding: false,
	isAuto: true,
	isLoop: true,
	isDrag: false,
	interval:5000,
	isCursor: false,
	speed:3000

});

var alturaBanner = $(".fade-slider").height();

$(".bannerEstatico").css({"height":alturaBanner+"px"})


/*=============================================
ANIMACIONES SCROLL
=============================================*/

$(window).scroll(function(){

	var posY = window.pageYOffset;
	
	if(posY > alturaBanner){

		$("header").css({"background":"white"})

		$("header .logotipo").css({"filter":"invert(100%)"})

		$(".fa-search, .fa-bars").css({"color":"black"})

	}else{

		$("header").css({"background":"rgba(0,0,0,.5)"})

		$("header .logotipo").css({"filter":"invert(0%)"})

		$(".fa-search, .fa-bars").css({"color":"white"})

	}

})

/*=============================================
MENÚ
=============================================*/

$(".fa-bars").click(function(){

	$(".menu").fadeIn("fast");

})

$(".btnClose").click(function(e){

	e.preventDefault();

	$(".menu").fadeOut("fast");

})

/*=============================================
GRID CATEGORÍAS
=============================================*/

$(".grid figure, .gridFooter figure").mouseover(function(){

	$(this).css({"background-position":"right bottom"})

})

$(".grid figure, .gridFooter figure").mouseout(function(){

	$(this).css({"background-position":"left top"})

})

$(".grid figure, .gridFooter figure").click(function(){

	var vinculo = $(this).attr("vinculo");

	window.location = vinculo;

})

/*=============================================
PAGINACIÓN
=============================================*/

$(".pagination").twbsPagination({
	totalPages: 10,
	visiblePages: 4,
	first: "Primero",
	last: "Último",
	prev: '<i class="fas fa-angle-left"></i>',
	next: '<i class="fas fa-angle-right"></i>'

});


/*=============================================
SCROLL UP
=============================================*/

$.scrollUp({
	scrollText:"",
	scrollSpeed: 2000,
	easingType: "easeOutQuint"
})

/*=============================================
DESLIZADOR DE ARTÍCULOS
=============================================*/


$(".deslizadorArticulos").jdSlider({
	wrap: ".slide-inner",
	slideShow: 3,
	slideToScroll:3,
	isLoop: true,
	responsive: [{
		viewSize: 320,
		settings:{
			slideShow: 1,
			slideToScroll: 1
		}

	}]

})

/*=============================================
SUBIR IMAGEN 
=============================================*/

$("#exampleInputFile").change(function(){

   var image = this.files[0];
   var nombre = image.name;
   console.log("image",image);

   var datosImage = new FileReader;
   datosImage.readAsDataURL(image);
   $(datosImage).on("load", function(event){
      var rutaImage = event.target.result;
    
	  $(".prevFotoOpinion").attr("src", rutaImage);

	  var identidad = document.getElementById("identidad").value;
	  let extraida = nombre.substring(nombre.length-3,nombre.length);
	  for(i=0;i<nombre.length;i++){
           var letra = nombre.substring(i,i+1); 
		   if(letra=="."){
			alert(i);
			 extraida = nombre.substring(i,nombre.length);
			alert(extraida);
		   }
		   
	  }
      
	 
	  var rutaverdadera = "img/usuarios/"+identidad+"/1"+ extraida;
	  ////////////var rutaverdadera = "img/usuarios/1.jpg";
      $(".imagen1").attr("value", rutaverdadera);
   })


})

$("#InputFile2").change(function(){
	
	
	var image = this.files[0]; 
	var nombre = image.name;
	console.log("image",image);
 
	var datosImage = new FileReader;
	datosImage.readAsDataURL(image);
	$(datosImage).on("load", function(event){
	   var rutaImage = event.target.result;
 
	   $(".prevFotoOpinion2").attr("src", rutaImage);
	   let extraida = nombre.substring(nombre.length-3,nombre.length);
	   var identidad = document.getElementById("identidad").value;
	   for(i=0;i<nombre.length;i++){
		var letra = nombre.substring(i,i+1); 
		if(letra=="."){
		 alert(i);
		  extraida = nombre.substring(i,nombre.length);
		 alert(extraida);
		}
		
   }
   
  
   var rutaverdadera = "img/usuarios/"+identidad+"/2"+ extraida;
	   $(".bimagen2").attr("value", rutaverdadera);
	   

 
	})
 
 
 })

 $("#bInputFile3").change(function(){
	
	
	var image = this.files[0]; 
	var nombre = image.name;
	console.log("image",image);
 
	var datosImage = new FileReader;
	datosImage.readAsDataURL(image);
	$(datosImage).on("load", function(event){
	   var rutaImage = event.target.result;
 
	   $(".prevFotoOpinion3").attr("src", rutaImage);
	   let extraida = nombre.substring(nombre.length-3,nombre.length);
	   var identidad = document.getElementById("identidad").value;
	   for(i=0;i<nombre.length;i++){
		var letra = nombre.substring(i,i+1); 
		if(letra=="."){
		 alert(i);
		  extraida = nombre.substring(i,nombre.length);
		 alert(extraida);
		}
		
   }
   
  
   var rutaverdadera = "img/usuarios/"+identidad+"/3"+ extraida;
	   $(".dimagen3").attr("value", rutaverdadera);
	   
	   
 
	})
 
 
 })
 $("#dInputFile4").change(function(){
	
	var image = this.files[0]; 

	var nombre = image.name;
	console.log("image",image);
 
	var datosImage = new FileReader;
	datosImage.readAsDataURL(image);
	$(datosImage).on("load", function(event){
	   var rutaImage = event.target.result;
 
	   $(".prevFotoOpinion4").attr("src", rutaImage);
	   let extraida = nombre.substring(nombre.length-3,nombre.length);
	   var identidad = document.getElementById("identidad").value;

	   for(i=0;i<nombre.length;i++){
		var letra = nombre.substring(i,i+1); 
		if(letra=="."){
		 alert(i);
		  extraida = nombre.substring(i,nombre.length);
		 alert(extraida);
		}
		
   }
   
  
   var rutaverdadera = "img/usuarios/"+identidad+"/4"+ extraida;
	   $(".fimagen4").attr("value", rutaverdadera);
	   
	   
 
	})
 
 
 })

 $("#fInputFile5").change(function(){

	var image = this.files[0]; 
	var nombre = image.name;
	console.log("image",image);
 
	var datosImage = new FileReader;
	datosImage.readAsDataURL(image);
	$(datosImage).on("load", function(event){
	   var rutaImage = event.target.result;
 
	   $(".prevFotoOpinion5").attr("src", rutaImage);
	   let extraida = nombre.substring(nombre.length-3,nombre.length);
	   var identidad = document.getElementById("identidad").value;
	   for(i=0;i<nombre.length;i++){
		var letra = nombre.substring(i,i+1); 
		if(letra=="."){
		/// alert(i);
		  extraida = nombre.substring(i,nombre.length);
		/// alert(extraida);
		}
		
   }
   
  
   var rutaverdadera = "img/usuarios/"+identidad+"/5"+ extraida;
	   $(".videopres").attr("value", rutaverdadera);
	 
 
	})
 
 
 })

 



