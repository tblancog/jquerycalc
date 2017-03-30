$(document).ready(function(){
  $("#resultado").focus();
});

// Operaciones binarias
$(".btn").click(function(){
    if ( this.id == 'powerxy' ) {
      vlr = '^';

    } else {
      vlr = $(this).text();
    }

    actual = $("#resultado").val();

    // Borrar
    if(vlr=="C"){

      $("#resultado").val("");

    } else if( vlr=="=" ) {

        // Revisar si tiene operador de exponencial
        if( actual.indexOf('^') > 0 ) {

          operands =   $("#resultado").val().split('^');
          $("#resultado").val( Math.pow(operands[0], operands[1]) );

        } else {

          // Evalúa la operación con eval
          $("#resultado").val(eval(actual));
        }
    } else if( this.id == 'sumacsv' || this.id == 'prodcsv' ) {

      actual = $("#resultado").val().split(',');
      console.log( recorrerYOperar(actual, this.id));

      $("#resultado").val( recorrerYOperar(actual, this.id) );
    }

    else {

      $("#resultado").val(actual + vlr);
    }
});

// Operaciones unitarias
$(".fn").click(function(){

  fn = this.id;
  resultado = $("#resultado");
  actual = resultado.val() * 1;

  switch (fn) {

    case 'pow': resultado.val( Math.pow(actual, 2) ); break;

    case 'inv': resultado.val( 1  / actual ); break;

    case 'sqrt': resultado.val( Math.sqrt(actual ) ); break;

    case 'ent':
      resultado.val(
        actual >= 0 ? Math.floor(actual) : Math.ceil(actual)
      ); break;

    case 'factorial':
      resultado.val( factorial(actual) )

    case 'power2':
      resultado.val( Math.pow(2, actual) );
    break;
    default:

  }
});


// Factorial de un número usando recursividad
function factorial(num){

  if ( num <  0 ){
    return -1;

  } else if ( num === 0 ) {
    return 1;

  } else {
    return (num * factorial(num -1))
  }
}

// Operaciones con n operandos (suma y multiplicación)
function recorrerYOperar(array, tipo){
  if(array && array.length > 0){
    acum = 0;
    producto = 1;
    $.each( array, function(indice, valor){

      if (tipo == 'sumacsv') {
        acum += (valor * 1);

      } else {
        producto *= (valor * 1);
        acum = producto;
      }
    } );
    return acum;

  }
}
