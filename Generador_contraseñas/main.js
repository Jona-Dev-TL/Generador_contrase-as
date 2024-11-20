let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById(contrasena);
let botonLimpiar = document.getElementById('limpiar');
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678!@#$%^&*()';

// Función para validar la fuerza de la contraseña
function validarContrasena(password) {
    let longitud = password.length;
    let tieneMayusculas = /[A-Z]/.test(password);
    let tieneMinusculas = /[a-z]/.test(password);
    let tieneNumeros = /\d/.test(password);
    let tieneEspeciales = /[!@#$%^&*()]/.test(password);

    if (longitud < 8) {
        return "Débil"; // Si tiene menos de 8 caracteres, es débil
    } else if (longitud >= 8 && longitud < 12) {
        if (tieneMayusculas && tieneMinusculas && tieneNumeros) {
            return "Media"; // Si tiene al menos 8 caracteres, pero no todos los tipos de caracteres, es media
        } else {
            return "Débil"; // Si no cumple con los requisitos básicos, sigue siendo débil
        }
    } else if (longitud >= 12 && tieneMayusculas && tieneMinusculas && tieneNumeros && tieneEspeciales) {
        return "Fuerte"; // Si tiene 12 caracteres o más, y todos los tipos de caracteres, es fuerte
    } else {
        return "Media"; // Si tiene todos los tipos de caracteres pero no llega a 12, es media
    }
}

function generar(){
    let numeroDigitado = parseInt (cantidad.value);

    if(numeroDigitado < 6) {
        alert("La cantidad de caracteres debe ser mayor que 6");
    }

    let password = '';
    for(let i= 0; i < numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;
    }

    contrasena.value = password;


let fuerza = validarContrasena(password);
alert("La fuerza de la contraseña es: " + fuerza);
}

function limpiar() {
    contrasena.value = '';
}



