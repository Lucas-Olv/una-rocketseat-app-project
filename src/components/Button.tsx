import { ButtonHTMLAttributes } from "react";
import styles from '../../styles/Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  return (
    <button className={styles.button} {...props}/>
  )
}