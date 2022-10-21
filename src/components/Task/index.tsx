import { useState } from "react";
import FormTask from "../FormTask";


interface newTask {
    id: number,
    description: string;
    completed: boolean;
}


export default function Task() {

    const [task, setTask] = useState<newTask[]>([])
    
    function createNewTask(description: string) {
        
        setTask([...task, {
           id: Math.random(),
           description: description,
           completed: false 
        }   
        ]);

        console.log(task);
    }

    return (
        <>
        <FormTask createNewTask={createNewTask} />
        </>
    )
}