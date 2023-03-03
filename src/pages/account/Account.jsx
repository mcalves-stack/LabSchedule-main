import { useDispatch, useSelector } from "react-redux";

//HOOKS
import React, { useState, useEffect } from "react";
import style from "../account/account.module.css";
import { getAUser } from "../../slices/userSlice";

function Account() {
  const { auth } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  console.log(user)
  // get id from localstorage
  const id = auth.id;
  const dispatch = useDispatch();

  //dispatch request with id as parameter
  useEffect(() => {
    dispatch(getAUser(id));
  }, [dispatch, id]);

  return (
    // container width: 450px
    <div className={style.Account_container}>
      {/* Foto e Nome */}
      <div className={style.Account_Usuario}>
        {/* Image width: 150px */}
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Foto"
        />

        <span>{user.login}</span>
      </div>

      <div className={style.Account_navigation_container}>
        <ul className={style.Account_navigation_list}>
          <li className={style.Account_navigation_item}>
            <a href="localhost:3000/notifications">
              <span>Notificações</span>
            </a>
          </li>
          <li className={style.Account_navigation_item}>
            <a href="localhost:3000/configs">
              <span>Configurações</span>
            </a>
          </li>
          <li className={style.Account_navigation_item}>
            <a href="localhost:3000/profile">
              <span>Perfil</span>
            </a>
          </li>
          <li className={style.Account_navigation_item}>
            <a href="localhost:3000/exit">
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Account;
