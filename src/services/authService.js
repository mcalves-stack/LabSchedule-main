//CONFIGS OF REQUESTS
import { api, requestConfig,requestConfiglogin } from "../utils/config";


//REGISTER AND SIGN USER
const register = async(data)=>{
    
    const config = requestConfig("POST",  data)
    try {
        const res = await fetch (api+"users", config)
            .then((res) => res.json())
            .catch((err) => err)
            if(res.access_token && !res.detail ){
                localStorage.setItem("auth", JSON.stringify(res));
            }
            return res;
    } catch (error) {
        console.log(error)
    }
}


//SIGN IN A USER 

const login = async(data)=>{

    const config =  requestConfiglogin("POST", data)
    try {
        const res = await fetch(api + "login", config)
            .then((res) => res.json())
            .catch((err) => err)
            if(res.access_token && !res.detail){
                localStorage.setItem("auth", JSON.stringify(res));
            }
            return res;
    } catch (error) {
        console.log(error);
    }
}

//LOGOUT A USER
const logout = () =>{
    localStorage.removeItem("auth");
}

const authService = {
    register,
    login,
    logout
}

export default authService;