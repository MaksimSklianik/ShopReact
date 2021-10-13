import {$authHost, $host} from "./index";
import data from "bootstrap/js/src/dom/data";
import jwtDecode from "jwt-decode";

export const registration = async(email, password)=>{
    const response= await $host.post('api/user/registration',{email,password,role:'ADMIN'})
    localStorage.setItem('token',data.token)
    return jwtDecode(data.token);
}
export const login = async(email, password)=>{
    const response= await $host.post('api/user/login',{email,password,})
    localStorage.setItem('token',data.token)
    return jwtDecode(data.token);
}
export const chek = async()=>{
    const {data}= await $host.post('api/user/auth')
    localStorage.setItem('token',data.token)
    return jwtDecode(data.token);
}
