import styles from './styles.module.scss'
import { AiFillCheckSquare } from 'react-icons/ai'

export const Button = ({children}) => {
    return (
      <>
      <button className={styles.taskButton}>
        {children}
      
      </button>
      
      </>
      
    )
  }

export default Button