let list = [1,2,3,4,5,6,7,8,9,10];
list.length // la longitud del array
list[0]// me da el valor del index elegido 4

// for (let index = 0; index < list.length; index++) {
//     console.log(list[index])
// }

// for (let index = 0; index < list.length; index++) {
//     const multiplicacion = 2*list[index];
//     console.log(`2x${list[index]} = ${multiplicacion}`);
// }


function multiplicadorSinSigno(num1,num2) {
    let resultado = 0 ;
    for (let index = 0; index < num2; index++) {
        resultado = resultado+num1;
        // resultado += num1;
    }
    console.log(resultado);
}

function cuadrado() {
    for (let index = 0; index < 4; index++) {
        for (let indexDos = 0; indexDos < index; indexDos++) {
           console.log("* * * * * * * *");
        }
    }
}

// list.pop(11)
// console.log(list)

// aplicaciones de for con objetos 
const userList =[
    {
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        website: "hildegard.org",
        cuil:"20958411848" , 
        dni:"12345678",
        age:24,
        gender:"famale", 
        haveJob:true,
        isPoor:false,
        country:"Argentina",
        alias:"",
        cheked:true
    },
    {
        id: 2,
        name: "Leandro Paredes",
        email: "paredesLean@april.biz",
        website: "psgLeandro.org",
        cuil:"20928561241" ,
        dni:"98765432",
        age:22,
        gender:"male", 
        haveJob:true,
        isPoor:false,
        country:"Argentina",
        alias:"",
        cheked:true
    },
    {
        id: 3,
        name: "Juan salgado",
        email: "juanazo@april.biz",
        website: "nextToMe.org",
        cuil:"20933200241" ,
        dni:"12345600",
        age:43,
        gender:"male", 
        haveJob:true,
        isPoor:false,
        country:"Argentina",
        alias:"",
        cheked:true
    }
]


// donde el id del usuario sea mayor a 1
function listDeNombres(list) {
    let nameList =[];
    for (let i = 0; i < list.length; i++) {
        const user = list[i];
        if (user.id > 1) {
            nameList.push(user.name)
        }
    }
    console.log(nameList)
}

function eliminarUsuarioPorId(id,list) {
    let userName =[];
    for (let i = 0; i < list.length; i++) {
        const user = list[i];
        if (id !== user.id) {
            userName.push(user)
        }
    }
    return userName;
}

//Jeff
// console.log("Teniendo en cuenta que la escala de calificacion es de 0 a 10")
// let nota = Number(6);


// function calificacion(nota) {
//     if (nota == 10) {
//         console.log("Sobresaliente");
//     } else if (nota >= 8 && nota <= 9) {
//         console.log("Notable");
//     } else if (nota == 7) {
//         console.log("Bien");
//     } else if (nota == 6) {
//         console.log("Suficiente");
//     } else if (nota >= 4 && nota <= 5) {
//         console.log("Insuficiente");
//     } else if (nota >= 0 && nota <= 3) {
//         console.log("Muy deficiente");
//     } else {
//         console.log("Ingrese un numero entre 0 y 10");
//     }
// }



console.log(calificacion(2))

function calificacion(nota) {
    if (isNaN(nota)) {
        return 'Not a Number!';
    }
    if (nota >= 0 && nota <= 3) { 
        return 'Muy deficiente';
    }else if (nota > 3 && nota <= 5) {  
        return 'Insuficiente'; 
    } else if (nota > 5 && nota <= 6) {
        return 'suficiente';
    } else if (nota > 6 && nota <= 7) {
        return 'bien';  
    } else if (nota > 7 && nota <= 9) {
        return 'notable';
    } else if (nota > 9 && nota <= 10) {
        return 'sobresaliente'; 
    } else if (nota > 10) {
        return 'nota no valida';
    }
}

