const axios = require('axios').default;

//Funcion que hace el llamado HTTP a una api para luego retornar los usuarios
//tema que por ahora no vamos a ver se vera mas adelante cuando lleguemos al tema promesas
const getUsers = async()=>{
    let users
    await axios.get('http://rem-rest-api.herokuapp.com/api/users').then(async(res)=>{
        users = await res.data.data;
    });
    return users;
}

const showUsers = async()=>{
    //UserList respresenta un array de usuarios
    const usersList = await getUsers();
    findByLastName(usersList,"smith");
}

//Funcion que valida que los id son pares 
function idPares(userList) {
    let newUserList = [];
    for (let i = 0; i < userList.length; i++) {
        //comienza el for
        const user = userList[i];
        if(user.id%2 === 0){
            newUserList.push(user);
        }
        //termina el for
    }
    console.log(newUserList);
}

// valida que la logitud sea mayor a 5
function validarLongitud(userList) {
    if(userList.length > 5){
        console.log("es mayor a 5")
    }
}

// Busca nombres en las lista pasada por parametros y hace una nueva lista con los elemenent que tiene como
//nombre el parametro name
function findByName(userList,name) {
    let newUserList = [];
    for (let i = 0; i < userList.length; i++) {
        const user = userList[i];
        const firstName = user.firstName.toLowerCase()
        if(firstName === name){
            newUserList.push(user);
        }
    }
    console.log(newUserList);
}


function findByLastName(userList,lastName) {
    let newUserList = [];
    userList.forEach(user => {
        if(user.lastName.toLowerCase() === lastName){
            newUserList.push(user);
        }
    });
    console.log(newUserList);
}


//string.toLowercase() Peter = peter

// async function explame(params) {
//     const users = await getUsers();
//     console.log(users);
// }


showUsers();