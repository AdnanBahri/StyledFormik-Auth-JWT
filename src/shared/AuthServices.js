import axios from "../api/axios"

export const login = async (data)=>{
    const response = await axios.post('users/login/',data)
    return response?.data
}

export const register = async ({username,firstName,lastName,email,password})=>{
    const response = await axios.post(
        'users/register/',
        {
            "username":username,
            "first_name":firstName,
            "last_name":lastName,
            "email":email,
            "password":password,
        }
    )
    console.log("Log from AuthServices",response);
    return response?.data
}