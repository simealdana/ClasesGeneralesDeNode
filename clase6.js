const axios = require('axios').default;

const getUsers = async()=>{
    let users
    await axios.get('https://swapi.dev/api/people').then(async(res)=>{
        users = await res.data.results;
    });
    return users;
}

const showUsers = async()=>{
    const usersList = await getUsers();
    findByVehicles(usersList)
}

function findByVehicles(usersList) {
    let newList = []
    // for (let i = 0; i < usersList.length; i++) {
    //     const user = usersList[i]
    //     if(user.vehicles.length > 0 ){
    //         newList.push(user)
    //     }
    // }
    usersList.forEach(user => {
        if(user.vehicles.length > 0 ){
            newList.push(user)
        }
    });
    console.log(newList)
}

// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597

function fibonacci(number) {
    let a = 0;
    let b = 1;
    let listFibonacci =[0,1];
    for (let i = 0; i < number; i++) {
        b = b + a;
        listFibonacci.push(b);
        a = b - a;
    }
    console.log(listFibonacci)
}
fibonacci(4);
