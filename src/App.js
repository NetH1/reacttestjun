import { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm.js';
import TodoList from './components/TodoList.js';


const App = () => {
  const [tasks, setTasks] = useState([
    {id:1, caption:'React', description: 'Super React', isCompleted: false, datecomplete:'2022-11-22', file:'ma.txt'},
    {id:2, caption:'Vue', description: 'Super Vue', isCompleted: false, datecomplete:'2014-05-06', file:'ma.txt'},
    {id:3, caption:'Svelte', description: 'Super Svelte', isCompleted: false, datecomplete:'2025-05-06', file:'ns.txt'},
  ])
  return (
    <div className="App">
      <div>
        <TodoForm tasks={tasks} setTasks = {setTasks} />
      <TodoList tasks={tasks} setTasks = {setTasks} />
      </div>
    </div>
  );
}

export default App;
