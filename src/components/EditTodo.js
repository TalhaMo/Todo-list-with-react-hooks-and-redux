import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input } from 'reactstrap';
import { editList } from '../redux/todoactions';

const EditTodo = (props) => {
  const {
    className,
    todo
  } = props;

  const [modal, setModal] = useState(false);
const [editTask, setEditTask] = useState(todo.text)
const dispatch = useDispatch()
  const toggle = () => setModal(!modal);

const edit=()=>{
    dispatch(editList({id:todo.id,text:editTask}))
    toggle()
}

  return (
    <div>
      <i className="fa fa-edit fa-lg" onClick={toggle}/>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit</ModalHeader>
        <ModalBody>
          <Input type='text' value={editTask} onChange={(e)=>setEditTask(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={edit}>Save</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditTodo;