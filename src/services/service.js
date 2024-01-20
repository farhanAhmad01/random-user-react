import axios from "axios";


export const getUsers = async (pgNo) => {
    console.log(pgNo)
    let response = await axios.get('https://randomuser.me/api/?results=10&&page='+pgNo);
    const users = await response.data.results
    const page= await response.data.info.page
    return {users,page}

}
