import { useState } from 'react';
import Button from '../Button';
import styles from './styles.module.css';
import { passwordCharacters } from '../../scripts/objects/characters';
import { generate_pass } from '../../scripts/services/generate_pass';
import { copy_to_clipboard } from '../../scripts/services/copy_to_clipboard';

export default function Card(props){
    const [passLength = "8", setPassLength] = useState();
    const [password_gen, setPasswordGen ] = useState();
    const [copy_btn = "Copiar", setCopyBtn] = useState();

    const handleRangeChange = (event) =>{
        setPassLength(event.target.value);
    };    

    return(
        <>
            <div className={`${styles.glass_card} ${styles.card_align}`}>
                <h1 className={styles.card_element} id={styles.title}>Gerador de senhas: </h1>

                <input type="text" placeholder='Gere uma senha no botão abaixo' className={`${styles.card_element} ${styles.input_glass}`} id={styles.pass_field} disabled value={password_gen}/>

                <div id={styles.pass_length_field}>
                    <input type="range" name="pass_length" className={`${styles.plf_element} ${styles.slider}`} id={styles.pass_length} min="8" max="64"
                        value={passLength}
                        onChange={handleRangeChange} 
                    />
                        <label htmlFor="pass_length" className={styles.plf_element} id={styles.label_width}>
                            {passLength}
                        </label>
                </div>

                <div className={styles.card_element} id={styles.buttons_field}>
                    <Button
                        button_text = 'Gerar'
                        btn_function = {()=>{
                            setPasswordGen(generate_pass(passLength, passwordCharacters.numbers + passwordCharacters.lowercase + passwordCharacters.uppercase + passwordCharacters.special));
                            setCopyBtn('Copiar')
                        }}
                    />

                    <Button
                        button_text = {copy_btn}
                        btn_function = {()=>{
                            if(password_gen.length>=8){
                                copy_to_clipboard(password_gen);
                                setCopyBtn('Copiado');
                            } else {
                                alert('Nenhum valor definido.')
                            }
                        }}
                    />
                </div>
            </div>
        </>
    )
}


