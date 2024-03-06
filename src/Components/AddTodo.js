import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { Add } from '../Redux/actions/ActionTask';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
`;

const FormContainer = styled.div`
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextInput = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    width: 300px;
`;

const AddButton = styled.button`
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export default function AddTodo() {
    const todos=useSelector(state=>state);
    const dispatch=useDispatch();
    
    const [ToDoName,setTodoName]=useState("");

    const HandleChange=(e)=>{
        setTodoName(e.target.value)
}
    const HandleAdd=(e)=>{
        e.preventDefault();
       
    const b=todos.find((e)=>(e.name.toLowerCase() ==ToDoName.toLowerCase()) );
    if (todos && b) {
        
        alert("Task already exists!");
        setTodoName("");
    } else {
        dispatch(Add({
            id:Date.now(),
            name: ToDoName,
            check:false}
        ));
        setTodoName(""); // Clear input after adding todo
       
    }
       
    };
  return (
    <Container>
      <Form >
        <TextInput type='text' placeholder='Add ToDo' value={ToDoName} onChange={(event)=>HandleChange(event)}/>
        
        <AddButton  onClick={(event)=>HandleAdd(event)}>ADD TODO</AddButton >
      
      </Form>
      
      </Container>
  )
}