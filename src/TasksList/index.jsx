import styles from './styles.module.scss'
import TaskForm from '../TaskForm/index.jsx'
import Header from '../Header/index.jsx'
import { useState } from 'react'
import Task from "../Task/Task.jsx"
import Divider from '../Divider/index.jsx'

function TasksList(){

    const [tasks, setTasks] = useState([]);
    
    const addTask = task => {
        if(task.text.trim()) {
            task.text = task.text.trim()
            const updatedTasks = [task, ...tasks]
            setTasks(updatedTasks) 
        }
    }
    
    const deleteTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id)
        setTasks(updatedTasks)
    }

    const completeTask = id => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed
            }
            return task;
        })
        setTasks(updatedTasks);
    }

        //console.log("Tarea Agregada")
        //console.log(task)
    return(
        
        <div className={styles.taskApp}> 
            <Header className={styles.headerContainer}/>
            <TaskForm onSubmit={addTask} />
            <Divider></Divider>
            <div className={styles.taskListContainer}>
                {
                    tasks.map((task) => 
                    <Task
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        completed={task.completed}
                        completeTask={completeTask}
                        deleteTask={deleteTask} />
                    )
                }
            </div>
        </div>
    )
}

export default TasksList