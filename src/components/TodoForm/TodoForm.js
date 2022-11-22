import React, { useState } from 'react'
import styles from './TodoForm.module.css'
import { v4 as uuidv4 } from 'uuid';


const TodoForm = ({tasks, setTasks}) => {
    const [task, setTask] = useState({caption:'', description: '', file:''})
    //* СОЗДАНИЕ НОВОГО ТАСКА
    const addNewTask = (e) => {
        e.preventDefault()
        setTasks([...tasks, {...task, id: uuidv4()}])
        setTask({caption:'', description: ''})
    }
    return (
        <div className={styles.form_input}>
            <div 
            style={{display:'flex'}}>
            <input 
            value={task.caption} 
            onChange={e => setTask({...task, caption: e.target.value})}
            placeholder='Заголовок' 
            type="text" />
            <input 
            value={task.description} 
            onChange={e => setTask({...task, description: e.target.value})}
            placeholder='Описание' 
            type="text" />
            <input
            value={task.file} 
            onChange={e => setTask({...task, file: e.target.value})}
            placeholder='Заголовок' 
            type="file"  />
            <input
            disabled
            value={task.file} 
            onChange={e => setTask({...task, file: e.target.value})}
            placeholder='Название файла' 
            type="text"  />
            </div>
            <button onClick={addNewTask}>Создать задачу</button>
        </div>
    )
}

export default TodoForm;
