var imagenes = [
 "ADRIANA.jpg","ANA.jpg", "ANALY.jpg", 
 "ARELI.jpg", "BEATRIZ.jpg", 
 "CECILIA.jpg", "ELISA.jpg", 
 "EVELYN.jpg", "GRISSEL.jpg", "GUADALUPE.jpg","HEREDIA.jpg",
 "JOYCE.jpg","KAREN.jpg","KARLA.jpg","LESLIE.jpg","MILCA.jpg","MISHEL.jpg",
 "MONICA.jpg","NAIBIT.jpg","NAYELI.jpg","NELLY.jpg","OFELIA.jpg",
 "PATRICIA.jpg","REYNA.jpg","RUTH.jpg","SANDRA.jpg","SANDY.jpg","SHARON.jpg",
 "TAYDE.jpg","VIANEY.jpg","ZAZ.jpg" ];
 var nombres = [  
 "ADRIANA","ANA", "ANALY", 
 "ARELI", "BEATRIZ", 
 "CECILIA", "ELISA", 
 "EVELYN", "GRISSEL", "GUADALUPE","HEREDIA",
 "JOYCE","KAREN","KARLA","LESLIE","MILCA","MISHEL","MONICA","NAIBIT","NAYELI","NELLY",
 "OFELIA","PATRICIA","REYNA","RUTH","SANDRA","SANDY","SHARON","TAYDE","VIANEY","ZAZ"];
var numeroAlAzar=0;
var puntaje=0;
var intentos=5;
var error=1;
var puntos=0;

function desplegarPuntos(){
    $('#punt').text(puntos);
};

function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;
};
function desplegarNuevaJugada() {
  var tamanoArreglo = nombres.length;
  if(tamanoArreglo > 0){
    //var numeroAlAzar = enteroRandomEnRango( 0, tamanoArreglo); //import
  numeroAlAzar = enteroRandomEnRango( 0, tamanoArreglo)
  var imagen ='fotos/'+ imagenes[numeroAlAzar];
  $('#imagenPersona').attr('src',imagen);
  }else{
    alert("triunfaste");
  }
};



$(document).ready(function(){ // 
  
  $("select[name=selectorPais]").change(function(){
        alert("Tu sede es: "+ $("select[name=selectorPais]").val());
        $("input[name=mexico]").val($(this).val( desplegarNuevaJugada()));
      
      });

  $("#panel").click(function(){
        $("#flip").slideToggle("slow");
    });

  $('#inputNombre').focus(function(){
        $("#suerte").css("display", "inline").fadeOut(2000);
    });
 
    $('#btnRevisar').click(function(){
      //obtener nombre
        var nombre =$('#inputNombre').val();
        
        nombre=nombre.toUpperCase();
        console.log('el usuario ingreso'+nombre); 
        var nombreAdivinar= nombres[numeroAlAzar];
        console.log('el correcto es :'+nombreAdivinar);
        
          if(nombre==nombreAdivinar){
            alert("adivinaste");
            nombres.splice(numeroAlAzar,1);
            imagenes.splice(numeroAlAzar,1);
            puntos=puntos+5;

            desplegarNuevaJugada();
            
          }else{
             desplegarNuevaJugada();
             puntos = puntos -1; 
             intentos--;
             alert("Te quedan "+intentos+" intentos"); 
             if(intentos<=1){
              puntos=0;
              alert("Game over");
             }
          }  
          desplegarPuntos();     
    });
    
   
});