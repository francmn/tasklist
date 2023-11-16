import React from 'react'
import ReactDOM from 'react-dom/client'
import TasksList from './TasksList/index.jsx'
import styles from './styles.module.scss'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TasksList />
  </React.StrictMode>,
)
