function calcularDescuento(precio, diaSemana){
    switch(diaSemana){
        case "Lunes":
            return precio = precio - precio * 0.1;
            break;
        case "Martes":
             return precio = precio - precio * 0.2;
             break;
         case "Miercoles":
             return precio = precio - precio * 0.3;
             break;
         case "Jueves":
             return precio = precio - precio * 0.1;
             break;
         default:
             return precio = precio;                   
     }
 }
 let precio = parseInt(prompt("Ingrese el Precio"));
 let diaSemana = prompt("Ingrese Dia de semana");
 let resultado = calcularDescuento(precio, diaSemana);
 alert(`Con descuento el precio es: ${resultado}`);