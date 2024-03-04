import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { UseDispatch, useDispatch } from 'react-redux';
import { Add } from '../Redux/actions/ActionTask';
export default function AddTodo() {
    const dispatch=useDispatch();
    
    const [ToDoName,setTodoName]=useState("");

    const HandleChange=(e)=>{
        setTodoName(e.target.value)
}
    const HandleAdd=(e)=>{
        e.preventDefault();
       
        
        dispatch(Add({
            id:Date.now(),
            name: ToDoName,
            check:false}
        ));
    }
  return (
    <div>
      <form >
        <input type='text' placeholder='add todo' onChange={(event)=>HandleChange(event)}/>
        
        <button onClick={(event)=>HandleAdd(event)}>ADD TODO</button>
      
      </form>
      
    </div>
  )
}
