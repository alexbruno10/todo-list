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

        toast('Tarefa adicionada!', {
            icon: '👏',
          });

    }

    function checkTask(id: number) {
        const newTask = task

        const newTasks = newTask.map((task) => {
            if(task.id === id) {
                return {
                    ...task,
                    completed: !task.completed,
                }
            }
            return task
        })

        setTask(newTasks)

        toast.success('Tarefa concluída!')

    }

    return (
        <>
        <FormTask createNewTask={createNewTask} />
        <Tasks task={task} checkTask={checkTask} />
        </>
    )
}