import React from "react";
import { useState } from "react";

export default function TaskInput({addTask}){
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim()){
            console.log("submitting text", text);
            addTask(text);
            setText("");
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
               type="text"
               value={text}
               onChange={(e) => {console.log("input changed",e.target.value); setText(e.target.value)}} 
               placeholder="add a new Task"
               className="border p-2 w-full"
            />
            <button type="submit" className="mt-2 bg-blue-500 text-white p-2 w-full">Add Task</button>
        </form>
    )
}