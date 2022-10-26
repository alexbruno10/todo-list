import { useState } from "react";
import FormTask from "../FormTask";
import Tasks from "../Tasks";

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


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

        toast.success('Tarefa adicionada!')

        console.log(task);
    }

    return (
        <>
        <FormTask createNewTask={createNewTask} />
        <Tasks task={task} />
        </>
    )
}