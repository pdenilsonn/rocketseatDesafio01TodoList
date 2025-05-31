import { CheckIcon, TrashIcon } from '@phosphor-icons/react'
import styles from './TaskItem.module.css'

interface Task {
    id: number;
    content: string;
    isChecked: boolean;
}

interface itemProps {
    task: Task;
    onDeleteTask: (id: number) => void;
    onCheckedTask: (id: number) => void;
}

export function TaskItem({ task, onDeleteTask, onCheckedTask }: itemProps) {

    function handleDeleTask() {
        onDeleteTask(task.id)

    }

    function handleCheckedTask() {
        onCheckedTask(task.id)
    }



    return (
        <div style={{ background: task.isChecked ? 'var(--gray-700)' : '' }} className={styles.item}>
            <div>
                {!task.isChecked && (
                    <button
                        onClick={handleCheckedTask}
                        className={styles.checkButton}
                    >
                    </button>
                )}
                {task.isChecked && (
                    <button
                        onClick={handleCheckedTask}
                        className={styles.checkedButton}
                    >

                        <CheckIcon color='white' size={18} />
                    </button>
                )}
                <p style={{ color: task.isChecked ? 'var(--gray-300)' : '' }}>{task.content}</p>
            </div>
            <button
                onClick={handleDeleTask}
                type='submit'>
                <TrashIcon
                    size={20}
                    color='var(--gray-300)' />
            </button>
        </div>
    )
}