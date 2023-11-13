import React from 'react';
import styles from './styles.module.scss'
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({id, text, completed, completeTask, deleteTask}) {

  return (
    <div className={[styles.taskContainer, completed == true? styles.tachado : ''].join(' ')}>
      <div
        className='task-text'
        onClick={() => completeTask(id)}>
          {text}
      </div>
        <div
          className='task-container-icon'
          onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className='task-icon' />
        </div>
    </div>
  )
}

export default Task