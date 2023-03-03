import React from 'react';
import Login from './auth/login/Login'

import { useAuth } from './hooks/useAuth';
//css

import style from './App.module.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SideBar from './Components/sidebar/SideBar';
import Home from './pages/home/Home';
import Loader from './Components/loader/Loader';
import RoomRegistration from './pages/admin/RoomRegistration';
import Account  from './pages/account/Account';
const App = () => {

  const {isAuth, loading} = useAuth()

  if(loading){
   return (
    <div className={style.loader__app}>
      <Loader/>
    </div>
   )
  }

  return (

    <div className={style.App}>
      
      <BrowserRouter>    
        {isAuth ? <SideBar /> : <link to={"/"}/>}   
        <Routes>
          <Route path='/'element={!isAuth ? <Login/>  : <Navigate to="home"/>}/>,
          <Route path='/account' element = { isAuth ? <Account/> : <Navigate to="/"/>}/>,
          <Route path='/home' element = { isAuth ? <Home/> : <Navigate to="/"/>}/>,
          <Route path='/roomregister' element = { isAuth ? <RoomRegistration/> : <Navigate to="/"/>}/>,
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
