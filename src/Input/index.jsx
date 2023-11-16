import styles from './styles.module.scss'
//import TaskForm from '.index.jsx'

export const Input = ({handleChange}) => {
    return (
      <input
        type="text"
       // placeholder="Escribe una tarea" 
        className={styles.taskInput}
        name="texto"
        onChange={handleChange}
      />
    )
  }

export default Input