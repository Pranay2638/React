import { useState } from 'react'
import TaskInput from './components/taskInput.jsx'
import TaskList from './components/taskList.jsx'
import './App.css'

function App() {
  const [task,setTask] = useState([])
  const addTask = (text) => {
    console.log("adding task",text);
    setTask([...task, {id: Date.now() , text, completed: false}])
    console.log("updated task",task);
  };

  const toggleTask = (id) => {
    console.log("toggling task ID: ", id);
    setTask(prevTask => prevTask.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Task Manager</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={task} toggleTask={toggleTask} />
    </div>
  )
}

export default App
