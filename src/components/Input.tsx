import { InputHTMLAttributes } from "react";
import styles from '../../styles/Input.module.scss';

// type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = (props: any) => {
  return(
    <div className={styles.input}>
      <label><i className={props.icon}></i></label>
    <input {...props}/>
    </div>
  )
}