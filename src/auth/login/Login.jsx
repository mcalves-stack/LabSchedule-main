//HOOKS
import React,{useState,useEffect} from 'react';

// ICONS
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { AiOutlineLock,AiOutlineUser } from "react-icons/ai";

//IMGS
import sign from '../../Img/Login/ImgLogo.svg'

//CSS
import styles from './Login.module.css';

//COMPONENTS
import Loader from '../../Components/loader/Loader';
import Message from '../../Components/message/Message';

//REDUX
import {login, reset} from '../../slices/authSlice'
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {

    //SET INPUTS
    const [password, setPassword] = useState("")
    const [username, setEmail] = useState("")

    // GET A STATE AUTH 
    const {loading, error} = useSelector((state)=> state.auth)
    const dispatch = useDispatch()

    // GET  AND SEND VALUES INPUTS TO API
    const handleSubmit = (e) =>{
        e.preventDefault();
        const user = {
            password,
            username
        }
        dispatch(login(user));
    }

    // RESET INITIAL STATE OF STATES 
    useEffect(()=>{
        dispatch(reset());
    }, [dispatch]);
    
    // SHOW PASSWORD TEXT OR ENCRYPTED 
    const [ showPass,setShowPass] = useState(false);
    const togglePass = () => {
        setShowPass(!showPass);
    }

    return (

        <div className={styles.login__container}>
            
            <div className={styles.box__logo}>
                <img src={sign} alt="" />
            </div>

            <div className={styles.login__box}>

                <form onSubmit={handleSubmit}>

                    <div className={styles.box}>
                        <div className={styles.icon__input}>
                            <AiOutlineUser/>
                        </div>
                        <input 
                            type="user" 
                            required 
                            placeholder='Usuário'
                            onChange={(e) => setEmail(e.target.value)} 
                            value={username}
                         />           
                    </div>

                    <div className={styles.box}>
                        <div className={styles.icon__input}>
                            <AiOutlineLock/>
                        </div>
                        <div className={styles.box__password}>
                            <input type={( showPass === false)
                                ? /*true*/ "password"
                                : /*false*/"text" }
                                required 
                                placeholder='Senha' 
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            {(showPass === false)
                                ? /* true */
                                 <div className={styles.__icon}> 
                                    <BsEye onClick={togglePass} className={styles.icon__eye} />
                                  </div>
                                : /* false */
                                <div className={styles.__icon}> 
                                    <BsEyeSlash onClick={togglePass} className={styles.icon__eye} />
                                </div>
                            }  
                        </div>
                    </div>

                    <div className={styles.container__check}>
                        <div className={styles.box__check}>
                            <input type="checkbox" />
                            <p>Continuar conectado</p>
                        </div>
                    </div>

                    {!loading && <input className={styles.btn} type="submit" value="Login" />}
                    {loading && <button className={styles.btn} type="submit" disabled > <Loader/></button>}
                    {error && <Message msg={error} type="error"/>}
                    <a className={styles.recover} href="/#" > Esqueceu a Senha? </a>
                </form>
                
            </div>
        </div>
    );
}

export default Login;
