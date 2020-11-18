//Poner su Nombre aca

//Ejercicio 1 Valor (4 puntos)
// Dado el siguiente string random "const = stringRandon", reorganizar el string de manera alfabetica
//deben de tomar en cuanta que cada letra simboliza un numero cuando se comparan entre letras , ejemplo
// a simboliza a la 0 , el b simboliza el 1 etc..
//pueden compara una letra contra la otra , ejemplo b>a , esto sera igual a true
// if("b">"a"){
//     true
// }
// por ultimo un string puede tener el mismo comportamiento que un array.
// ejemplo : const cadena = "hola";
// cadena[0] sera igual a h

const ejercicioUno= ()=>{
    const stringRandom = Math.random().toString(36).substring(7);
    // escriba su codigo aca
}


// Ejercicio 2 Valor (3 puntos)
// esta variable simboliza  los usuarios de la api, en pocas palabra retorna todo los usuarios
const getUsers = async()=>{
    let users
    await axios.get('https://swapi.dev/api/people').then(async(res)=>{
        users = await res.data.results;
    });
    return users;
}

//Usando la lista de usuarios que viene de la funcion getUsers, Realizar:
//A) filtrar por los id sean multiplo de 5
//B) hacer dos listas una por gender male y otra por female
//C) Filtrar y hacer una lista por los personajes que su mass sea mayor a 70 
//Recomendacion : pueden hacer una funcion por cada requerimiento  

const requerimientoA = async()=>{
    const usersList = await getUsers();

    //Su codigo 
}



//Ejercicio 3 Valor (3 puntos)

//Usando la llamada a la api anterior el getUser , realizar lo siguiente :
//A)Hacer una lista de los usuarios que tengas mas de 4 peliculas
//B)hacer una lista de los usuarios que tengan en su lista de peliculas "http://swapi.dev/api/films/3/"
