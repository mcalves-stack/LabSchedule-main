import React from 'react';

//HOOKS
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout, reset } from '../../slices/authSlice';

//CSS
import style from './home.module.css'

const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    //FUNCTION LOGOUT, USING DISPATCH TO RESET STATES AND REMOVE TOKEN ACCESS OF LOCALSTORAGE. 
    //AND RETURNING THE ROUTE "/"   
    const handleLogout =() =>{
      dispatch(logout());
      dispatch(reset());
      navigate("/");
    }
    return (
        <div className={style.container__home}>

                <p onClick={handleLogout}>LOGOUT</p>

        </div>
    );
}

export default Home;
