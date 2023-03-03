import React from "react";
import styles from './Button.module.css'

export default function Button (Props)  {
    return(
        <>
        
            <input type="button"  value={Props.post.title} className={styles.button_register} /> 
            <input type="button" value={Props.post.subtitle} className={styles.button_cancel} />
        </>
    )
}