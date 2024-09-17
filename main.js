let datos = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadena_caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"


function generar() {
    limpiar();
    let contrasena_final = "";
    let numero_digitado = parseInt(datos.value);
    if(numero_digitado<8) {
        alert ("La cantidad de caracteres tiene que ser mayor a 8");
    }
    for (let index = 0; index < numero_digitado; index++) {
        let caracter = Math.random() * cadena_caracteres.length;
        contrasena_final += cadena_caracteres[parseInt(caracter)]
    }
    validar(contrasena_final);
    contrasena.value = contrasena_final;
}

function validar(val){
    let cad_especiales = cadena_caracteres.substring(cadena_caracteres.length-10)
    let miniscula = 0;
    let mayuscula = 0;
    let especial = 0;
    for(let i=0;i<val.length;i++){
        if(val[i]>'A' && val[i]<'Z'){
            mayuscula = 1;
        }
        if(val[i]>'a' && val[i]<'z'){
            miniscula = 1;
        }
        if (cad_especiales.includes(val[i])){
            especial = 1
        }
        console.log(cad_especiales);
    }
    let sum = miniscula + mayuscula + especial;
    if(sum == 3 )
        alert("Contraseña Segura");
    else if (sum == 2)
        alert("Contraseña Media");
    else
        alert("Contraseña Baja");
}

function limpiar(){
    contrasena.value = ""
}






