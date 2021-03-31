import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { addtodo } from '../redux/todoactions';

const InputToDo = () => {
const [Input, setInput] = useState('')
const dispatch = useDispatch()
const addtodos=()=>{
dispatch(addtodo({id:Math.random(),text:Input,isCompleted:false}))
setInput('')
}
    return (
        <div className="row">
        <div className="col-md-6 offset-3">
        <div div className="input-group mb-3">
            <input className="form-control" type="text" placeholder="Add your task" value={Input} onChange={(e)=>setInput(e.target.value)}/>
            <button className="btn btn-success outline-secondary" onClick={addtodos}>Add</button>
        </div>
        </div>
        </div>
    )
}

export default InputToDo
