import React from 'react';
import styles from './RoomRegistration.module.css'
import Button from '../../Components/button/Button';

const RoomRegistration = () => {
    return(
        <div className={styles.containner} >
           <div className={styles.box}>
                <div className={styles.title}>
                    <p className={styles.write}>
                    Cadastrar Salas
                    </p>
                </div>

                <div className={styles.colunaContainer}>
                    <div className={styles.colunas}>
                        <div className={styles.inputs}>
                            <p className={styles.escrita}> Número da Sala</p>
                            <input placeholder='Ex.: 08' type="text" className={styles.box_inputs} />
                        </div>

                        <div className={styles.inputs}>
                            <p className={styles.escrita}> Capacidade </p>
                            <input placeholder='Mín.: 10' type="text" className={styles.box_inputs} />
                        </div>
                    </div>
                    
                    <div className={styles.colunas}>
                        <div className={styles.inputs}>
                            <p className={styles.escrita}> Computadores</p>
                            <input placeholder='16' type="text" className={styles.box_inputs} />
                        </div>

                        <div className={styles.inputs}>
                            <div className={styles.projectorOptions}>
                                <p className={styles.escrita}> Possui Projetor? </p>
                                
                                <div>
                                    <input type="radio" name="Radio" value="Sim"/> <p className={styles.escrita}> Sim </p> <br />
                                    <input type="radio" name="Radio" value="Não"/> <p className={styles.escrita}> Não </p> <br />
                                </div>

                            </div>
                            
                            
                        </div>
                    </div>
                </div>
                
                <div className={styles.Add_sofware}>
                    <p  className={styles.escrita}> + Adicionar software</p>
                </div>

                <div className={styles.buttons}>
                    <Button post={{
                        title: 'Cadastrar',
                        subtitle: 'Cancelar ',
                    }} 
                    />
            
                </div>
           </div>
        </div>
    )
}

export default RoomRegistration