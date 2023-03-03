//ICONS
import { GiTeacher as Rooms } from 'react-icons/gi';
import { FaUserCircle as User } from 'react-icons/fa';
import { RiUserSettingsFill as Admin } from 'react-icons/ri';
import { IoCalendar as Add, IoHome as Menu } from 'react-icons/io5';
import { HiArrowNarrowLeft} from "react-icons/hi";
import { HiArrowNarrowRight} from "react-icons/hi";

//MY IMGS
import Logo from '../../Img/SideBar/unasp.png';

//HOOKS
import {React, useState} from 'react';

//CSS
import style from './SideBar.module.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
  
  
  //THIS DECREASES THE SIDEBAR
  const [ showBar,setShowBar] = useState(false);
  const decreasesBar = () => {
      setShowBar(!showBar);
  }

  return (
    <nav className={`${style.sidebar__container} ${showBar ? style[`nav__closed`] : {}}`}>
      <div className={style.box__sidebar}>
        <div className={style.box__logo}>
          <img 
            src={Logo} 
            className={style.logo} 
            alt="unasp" />
        </div>
        <div className={style.container__icons}>
          <li className={style.box__icons}>
            <Link to={"/account"}>
              <User  />
              <p>Conta</p>
            </Link>
          </li>
          <div className={style.box__icons}>
            <Link to={"/home"}>
              <Menu  />
              <p>Home</p>
            </Link>
          </div>
          <li className={style.box__icons}>
            <a href="\#">
              <Add />
              <p>Reservar</p>
            </a>
          </li>
          <li className={style.box__icons}>
            <a href="\#">
              <Rooms />
              <p>Laboratórios</p>
            </a>
          </li>
          <li className={style.box__icons}>
          <Link to={"/roomregister"}>
              <Admin />
              <p>Administrador</p>
            </Link>
          </li>
        </div>
      </div>
      <div className={style.box__arow} >
        <li className={style.box__icons}>
          {(showBar === false)
            ? 
                <HiArrowNarrowLeft onClick={decreasesBar} className={style.arrow__close}/>
            : 
                <HiArrowNarrowRight onClick={decreasesBar} className={style.arrow__open}/>              
          }
        </li>
      </div>
    </nav>
  );
}

export default SideBar;
