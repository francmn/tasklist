import styles from './styles.module.scss'

export const Button = ({children}) => {
    return (
      <button className="task-button">
        {children}
      </button>
    )
  }

export default Button