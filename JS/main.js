function soma() {
    var numero_1 = +document.querySelector('#campo-1').value;
    var numero_2 = +document.querySelector('#campo-2').value;
    var resultado = numero_1 + numero_2;
    //alert(resultado);
    document.querySelector('#resultado').value = resultado;
}
function mult() {
    var numero_1 = +document.querySelector('#campo-1').value;
    var numero_2 = +document.querySelector('#campo-2').value;
    var resultado = numero_1 * numero_2;
    //alert(resultado);
    document.querySelector('#resultado').value = resultado;
}
function div() {
    var numero_1 = +document.querySelector('#campo-1').value;
    var numero_2 = +document.querySelector('#campo-2').value;
    var resultado = numero_1 / numero_2;
    //alert(resultado);
    document.querySelector('#resultado').value = resultado;
}
function sub() {
    var numero_1 = +document.querySelector('#campo-1').value;
    var numero_2 = +document.querySelector('#campo-2').value;
    var resultado = numero_1 - numero_2;
    //alert(resultado);
    document.querySelector('#resultado').value = resultado;
}
function modulo() {
    var numero_1 = document.querySelector('#campo-1').value;
    var numero_2 = document.querySelector('#campo-2').value;
    var resultado = Number(numero_1) % Number(numero_2);
    //alert(resultado);
    document.querySelector('#resultado').value = resultado;
}
function cálcula(sinal) {
    var resultado= 0;
    if(sinal == "+"){
        resultado = numero_1 + numero_2;
        else if (sinal == "-") {
            resultado = numero_1 - numero_2;
        }
    }
}
