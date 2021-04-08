import React from 'react'
import {useDispatch} from 'react-redux';
import { complete, deletetodo } from '../redux/todoactions';
import EditTodo from './EditTodo'
const Todo = ({todo}) => {
    const dispatch = useDispatch();
 
    return (
        <div className="container">
            
        <div className="row jumbotron">
            
        <div className="col-md-8">
            <p  style={
          todo.isCompleted
            ? { textDecoration: "line-through" }
            : {  }
        }>{todo.text}</p>
        </div>
        <div className="col-md-4" style={{display:"flex",justifyContent:"space-between"}}>
            
            <i style={todo.isCompleted?{color:"green"}:{}} className="fa fa-check-circle fa-lg" onClick={()=>dispatch(complete(todo.id))}/>
            
                <i className="fa fa-trash fa-lg" onClick={()=>dispatch(deletetodo(todo.id))}/>
        
            
            <EditTodo   todo={todo}/></div>
        </div>
        </div>
        
    )
}

export default Todo
