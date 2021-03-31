import React from 'react'
import {useSelector} from 'react-redux'
import Todo from './Todo'

const Todolist = () => {

    const tasks = useSelector(state => state.tasks)
    return (
        <div>
            {tasks.map(todo=>(
                <Todo  key={todo.id} todo={todo}/>
            ))}
        </div>
    )
}

export default Todolist
