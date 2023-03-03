import React from 'react'
import style from './message.module.css'
import { MdDangerous } from "react-icons/md";
function Message({msg, type}) {
  return (
   <div className={style.message}>
    <MdDangerous className={style.danger}/>
     <div className={style[type]}>
        <p>{msg}</p>
    </div>
   </div>
  )
}

export default Message