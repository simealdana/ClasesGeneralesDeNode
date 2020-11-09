const axios = require('axios').default;

const getUsers = async()=>{
    let users
    await axios.get('http://rem-rest-api.herokuapp.com/api/users').then(async(res)=>{
        users = await res.data.data;
    });
    return users;
}

const showUsers = async()=>{
    const users = await getUsers();
    console.log(users);
}

showUsers();