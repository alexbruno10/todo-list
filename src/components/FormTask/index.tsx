import {useState, FormEvent, ChangeEvent} from 'react'

import './style.scss'

interface Props {
    createNewTask: (description: string) => void;
}

export default function FormTask ({createNewTask}: Props) {
    const [description, setDescription] = useState('')

    function handleForm(event: FormEvent) {
        event.preventDefault()

        console.log(description);
        createNewTask(description)
        setDescription('')
    }

    function onChangeDescription(event: ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value);
    
    }
    
    return (
        <div className="task">
        <form onSubmit={handleForm} action="">
            <input type="text" name={description} value={description} onChange={onChangeDescription} placeholder="Adicione uma nova tarefa"/>
            <button>Criar</button>
        </form>
        </div>
    )
}