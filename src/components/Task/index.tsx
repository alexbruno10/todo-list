import { useEffect, useState } from "react";
import FormTask from "../FormTask";
import Tasks from "../Tasks";

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export interface Task {
    id: number,
    description: string;
    completed: boolean;
}

const LOCAL_STORAGE_KEY = 'todo-list:tasks'


export default function Task() {

    const [task, setTask] = useState<Task[]>([])

    const totalTaskCreated = task.length

    const teste = 'Oi';

    const totalTaskCompleted = task.filter((task) => task.completed).length;

    function getLocalStorage () {
        const tasks = localStorage.getItem(LOCAL_STORAGE_KEY)
        if(tasks) {
            setTask(JSON.parse(tasks))
        }
    }

    useEffect(() => {
        getLocalStorage()
    }, [])

    function saveTask(newTask: Task[]) {
        setTask(newTask)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask))
    }

    function createNewTask(description: string) {
        
        saveTask([...task, {
           id: Math.random(),
           description: description,
           completed: false 
        }   
        ]);

        toast('Tarefa adicionada!', {
            icon: '🚀 ',
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

        saveTask(newTasks)

        toast.success('Tarefa concluída!')

    }

    function deleteTask(id: number) {
        const newTask = task

        const newTasks = newTask.filter((task) => task.id != id)

        saveTask(newTasks)

        toast('Tarefa removida!', {
            icon: '👋',
          });
    }


    return (
        <>
        <FormTask createNewTask={createNewTask} />
        <Tasks task={task} 
        checkTask={checkTask} 
        totalTaskCreated={totalTaskCreated} 
        totalTaskCompleted={totalTaskCompleted}
        deleteTask={deleteTask}/>
        </>
    )
}