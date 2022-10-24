import { useState } from "react";
import FormTask from "../FormTask";
import Tasks from "../Tasks";


export interface Task {
    id: number,
    description: string;
    completed: boolean;
}


export default function Task() {

    const [task, setTask] = useState<Task[]>([])
    
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
        <Tasks task={task} />
        </>
    )
}