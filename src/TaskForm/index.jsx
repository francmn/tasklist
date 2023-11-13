import styles from './styles.module.scss'
import Input from '../Input'
import Button from '../Button'
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

export const TaskForm = (props) => {

    const [input, setInput] = useState('');
    // e (evento)
    const handleChange = e => {
        setInput(e.target.value);
        console.log(e.target.value);
    }

    const handleSend = e => {
        e.preventDefault() //para que el formulario no se vuelva a cargar
        const newTask = {
            id : uuidv4(), //genera un id único
            text : input,
            completed: false
        }

        props.onSubmit(newTask)
    }
    
    return (
      <form className='task-form'
            onSubmit={handleSend}>
        <Input handleChange={handleChange}></Input>
        <Button>Agregar tarea</Button>
      </form>
    )
  }

export default TaskForm