import styles from './styles.module.css'

export default function Button(props){
    return(
        <>
            <button 
                className={`${styles.button_glass} ${styles.buttons}`}
                onClick={props.btn_function}
            >
                    {props.button_text}
            </button>
        </>
    )
}