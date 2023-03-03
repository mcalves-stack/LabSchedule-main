
//HOOKS
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuth = () =>{

    const {auth} = useSelector((state)=> state.auth);
    const [isAuth,setAuth] = useState(false);
    const [loading,setLoading] = useState(true);

    useEffect(() =>{

        if(auth){
            setAuth(true);
        } else{
            setAuth(false);
        }
        setLoading(false)

    },[auth])

    return {isAuth,loading};
}