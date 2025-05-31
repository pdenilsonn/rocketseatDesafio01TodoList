import { PlusCircleIcon, ClipboardTextIcon } from '@phosphor-icons/react'
import styles from './TaskList.module.css'
import { TaskItem } from './TaskItem'
import { useState } from 'react'


interface Task {
    id: number,
    content: string,
    isChecked: boolean
}

export function TaskList() {

    const [taskListItems, setTaskListItems] = useState<Task[]>([
        { id: 1, content: 'triar o frango do congelador. ', isChecked: false },
        { id: 2, content: 'pegar diploma na secretária', isChecked: false }
    ])
    const countTasks = taskListItems.length

    const [newTaskItem, setNewTaskItem] = useState('')
    const countCheckedTasks = taskListItems.filter(task => task.isChecked).length

    function handleCreateNewTask(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault()

        const newTask: Task = {
            id: Date.now(),
            content: newTaskItem,
            isChecked: false
        }

        setTaskListItems([newTask, ...taskListItems])
        setNewTaskItem('')
    }


    const isNewTaskEmpty = newTaskItem.length === 0

    function handleNewTaksChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTaskItem(event.target.value)
    }

    function deleteTask(taskId: number) {
        const listTaskWithoutDeletedOne = taskListItems.filter(task => task.id !== taskId)

        setTaskListItems(listTaskWithoutDeletedOne);
    }


    function handlelistCheckedTasks(taskId: number) {
        const updatedTasks = taskListItems.map(task => {
            if (task.id === taskId) {
                return { ...task, isChecked: !task.isChecked }
            }
            return task
        })
        setTaskListItems(updatedTasks)

    }

    const isEmpty = countTasks === 0

    return (

        <div>
            <div>
                <form onSubmit={(handleCreateNewTask)} className={styles.createTask} >
                    <input value={newTaskItem} onChange={handleNewTaksChange} name='taskItem' placeholder='Adicionar nova tarefa' type="text" />
                    <button type='submit' disabled={isNewTaskEmpty}>Criar <PlusCircleIcon size={22} /></button>
                </form>
            </div>

            <div className={styles.taskList}>
                <div className={styles.titleStates}>
                    <p className={styles.titleOpen}>Tarefas Criadas <span>{countTasks}</span> </p>
                    <p className={styles.titleDone}>Concluídas <span>{countCheckedTasks}</span> </p>
                </div>
                <div className={styles.linePart}></div>

                {isEmpty && (
                    <div className={styles.boardTasks}>
                        <ClipboardTextIcon size={100} />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>

                    </div>
                )}

                <div>
                    {taskListItems.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onDeleteTask={deleteTask}
                            onCheckedTask={handlelistCheckedTasks}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}