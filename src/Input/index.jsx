//import  "../styles.module.scss"
import TaskForm from "../TaskForm"

export const Input = ({handleChange}) => {
    return (
      <input 
        type="text"
        placeholder="Escribe una tarea" 
        className="task-input"
        name="texto"
        onChange={handleChange}
      />
      
    )
  }

export default Input