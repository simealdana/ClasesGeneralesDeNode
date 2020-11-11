const axios = require('axios').default;

const getUsers = async()=>{
    let users
    await axios.get('https://swapi.dev/api/people').then(async(res)=>{
        console.log(res.data.results)
        users = await res.data.results;
    });
    return users;
}
const showUsers = async()=>{
    const usersList = await getUsers();
    console.log(usersList)
}
showUsers();