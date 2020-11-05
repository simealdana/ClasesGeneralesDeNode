let numeroCuatro = 4;
let edad = 24;

const resultadoDeLaSuma = sumaDosNumero(2,4)
const resultadoDeLaResta = restaDosNumeros(10,3)

function restaDosNumeros(numeroUno,NumeroDos) {
    let nuevoNumero = 5;
    const resta = numeroUno-NumeroDos-nuevoNumero;
    return resta;
}

function sumaDosNumero(numeroUno,NumeroDos) {
    const suma = numeroUno+NumeroDos;
    return suma;
}

function imprimirHola() {
    console.log("Hola")
}

function cumpleanios() {
    edad = edad+1;
}


// console.log(resultadoDeLaResta);
// console.log(resultadoDeLaSuma);
// imprimirHola();
// cumpleanios();

// console.log(edad);

// ejercicio 

function areaDeUnTriangulo(base,altura) {
    let resultado = "Necesitas que tus valores sean Pares";
    if (base % 2 == 0 && altura % 2 == 0) {
        resultado = (base*altura)/2;   
    } 
    return resultado
}

const numero1 = sumaDosNumero(10,4);
const numero2 = 4;
const resultadoDelArea = areaDeUnTriangulo(2,3);
console.log(resultadoDelArea);


// ejercicio  calculadora sencilla 

function calcularValorDeDosNumeros(numeroUno,numeroDos,operacion) {
    let resultado = 0;
    if (operacion) {
        if (operacion === "+" ) {
            resultado = numeroUno+numeroDos;
        } else if(operacion === "-"){
            resultado = numeroUno-numeroDos;
        } else if(operacion === "*"){
            resultado = numeroUno*numeroDos;
        } else {
            resultado = numeroUno/numeroDos;
        }
    }
    return resultado;
}

//Necesitas enviarle dos numeros  y una operacion que deben de ser + - * /, de no ser asi sera error
const calculo = calcularValorDeDosNumeros(2,2)
console.log(calculo);

const user1 = {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    website: "hildegard.org",
    cuil:"209584118" , 
    dni:"12345678",
    age:24,
    gender:"famale", 
    haveJob:true,
    isPoor:false,
    country:"Argentina",
    alias:"",
    cheked:true
}

function numeroPar(numeroPar) {
    if (numeroPar % 2 === 0) {
        console.log("Edad Par")
    }
}

function validarLongCuit(cuil) {
    if (cuil.length <= 11 && cuil.length >= 8) {
        console.log("cuil ok");
    }else{
        console.log("no ok");
    }
}

validarLongCuit(user1.cuil);


