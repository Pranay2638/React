import Task from "./task";

export default function TaskList({tasks, toggleTask}){
    console.log("rendering task list", tasks);
    return(
        <ul>
            {tasks.map((task)=>(
                <Task key={task.id} task={task} toggleTask={toggleTask} />
            ))}
        </ul>
    )
}