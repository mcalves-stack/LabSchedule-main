import React from 'react'
import style from './loader.module.css'
import { CgSpinnerTwoAlt } from "react-icons/cg";
function Loader() {
  return (
    <CgSpinnerTwoAlt className={style.spinner}/>
  )
}

export default Loader