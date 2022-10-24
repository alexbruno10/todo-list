import {Task} from '../Task'

interface Props {
    task: Task[];
}

export default function Tasks({task}: Props) {
    return (
        <>
        {task.map(tasks => (
            <p key={tasks.id}>{tasks.description}</p>
        ))}
        </>
    )
}