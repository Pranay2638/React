export default function Task({task, toggleTask}){
    console.log("rendering task", task);
    return(
        <li 
          onClick={() => toggleTask(task.id)}
          className={`p-2 border my-2 cursor-pointer ${task.completed ? 'line-through text-gray-500': ``}`}
        >
          {task.text}
        </li>
    )
}