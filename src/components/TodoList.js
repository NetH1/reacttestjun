import React, { useEffect, useMemo, useState } from 'react'
import styles from './TodoList.module.css'
const dayjs = require('dayjs')

const TodoList = ({tasks, setTasks}) => {
    //*State
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState({caption:'',description:''})

    //*Function DELETE
    const DeleteTask = (id) => {
        const newTasks = [...tasks].filter(task => task.id != id)
        setTasks(newTasks)
    }
    //*Function EDIT
    const editTask = (id,caption,description) => {
        setEdit(id)
        setValue({caption:caption, description:description})
    }
    //*Function SAVE
    const saveTask = (id) => {
        const newTasks = [...tasks].map(task => {
            if (task.id == id) {
                task.caption = value.caption
                task.description =value.description
            }
            return task
        })
        setTasks(newTasks)
        setEdit(null)
    }
    //*Function COMPLETE
    const completeTask = (id) => {
        const newTasks = [...tasks].map(task => {
            if(task.id == id) {
                task.isCompleted = true
            }
            return task
        })
        setTasks(newTasks)
    }
    const nowDate = dayjs().format('DD/MM/YYYY')
    return (
        <div className={styles.alltodos}>
            {tasks.map(task => 
           
                <div key={task.id} className={styles.todo}>
                    <header //* Условия при ее истечении и добавления стиля
                    className={dayjs(task.datecomplete).format('DD/MM/YYYY') == dayjs().format('DD/MM/YYYY') 
                    ? styles.datelost : styles.todo_header}>
                    <span //* Условия при выполнении задачи и добавления стиля
                    className={task.isCompleted == true 
                    ? styles.isCompleted : ''}>
                        {task.caption}
                        </span> 

                    {edit == task.id 
                    ? <input 
                    value={value.caption} 
                    onChange={e => setValue({...value, caption:e.target.value})} type="text" />
                    : <div></div>}
                    </header>
                    <div>
                    <div //* Условия при ее истечении и добавления стиля
                    className={dayjs(task.datecomplete).format('DD/MM/YYYY') == dayjs().format('DD/MM/YYYY') 
                    ? styles.datelost : styles.todo_description}>
                    <span //* Условия при выполнении задачи и добавления стиля
                    className={task.isCompleted == true 
                    ? styles.isCompleted : ''}>
                        {task.description}
                        </span>
            
                    {edit == task.id 
                    ? <div>
                    <input value={value.description} onChange={e => setValue({...value, description:e.target.value})} type="text" /> 
                    <button onClick={() => saveTask(task.id)}>Сохранить</button>
                    </div> 
                    : <div></div>}    
                    </div>
                
                    <button onClick={() => DeleteTask(task.id)}>
                    Delete
                    </button>
                    {task.isCompleted == true  
                    ? <span>Задание завершилось нельзя редактировать</span>
                    : <button 
                    onClick={() => editTask(task.id, task.caption, task.description)}>
                    Edit
                    </button> }
                    {task.isCompleted == true ? <span></span> 
                    : <button onClick={()=> completeTask(task.id)}>
                    Complete
                </button> }
                <div>
                    {dayjs(task.datecomplete).format('DD/MM/YYYY')}
                    </div>
                    <div>{task.file}</div>
                    </div>
                </div>)}
        </div>
    )
}

export default TodoList;
