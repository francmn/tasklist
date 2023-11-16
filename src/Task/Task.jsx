import React from 'react';
import styles from './styles.module.scss'
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { AiOutlineForm } from 'react-icons/ai';
import Button from '../Button/index.jsx';
import Checkbox from '../Checkbox/index.jsx';

function Task({id, text, completed, completeTask, deleteTask}) {

  return (
    <div className={[styles.taskContainer, completed == true? styles.tachado : ''].join(' ')}>
      <Checkbox handleChange={() => completeTask(id)} status={completed}></Checkbox>
      <div
        className={styles.taskText}
        onClick={() => completeTask(id)}>
          {text}
          
      </div>
      <div className={styles.taskButton}>
      <Button ><AiOutlineForm className={styles.taskIcon}/></Button>
      <Button><AiOutlineShareAlt className={styles.taskIcon}/></Button>
        <div
          className='task-container-icon'
          onClick={() => deleteTask(id)}>
        <Button><AiOutlineDelete className={styles.taskIcon} /></Button>     
        </div>
        </div>
    </div>
  )
}

export default Task