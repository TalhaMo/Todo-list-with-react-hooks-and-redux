import React from 'react'
import {useDispatch} from 'react-redux';
import { complete, deletetodo } from '../redux/todoactions';
import EditTodo from './EditTodo'
const Todo = ({todo}) => {
    const dispatch = useDispatch();
 
    return (
        <div className="row">
            
                <div className="col-md-6 offset-1">
            <p  style={
          todo.isCompleted
            ? { textDecoration: "line-through" }
            : {  }
        }>{todo.text}</p></div>
        <div className="col-md-1">
            <input type='checkbox' onClick={()=>dispatch(complete(todo.id))}/>
            </div>
            <div className="col-md-1">
            <button className="btn btn-danger" onClick={()=>dispatch(deletetodo(todo.id))}>delete</button></div>
            <div className="col-md-1">
            <EditTodo  buttonLabel="Edit" todo={todo}/></div>
            
        </div>
    )
}

export default Todo
