import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { CheckTodo, DeleteTodo } from '../Redux/actions/ActionTask'
import styled from 'styled-components';
import ToDo from './ToDo';

const Container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh'
}
const TodoContainer ={
    textAlign: 'center',
    backgroundColor:'#f9f9f9',
    border:'1px solid black',
    borderRadius: '5px',
    width:'20rem',
    height:'70vh',
    display:'flex',
    //justifyContent:'center',
    alignItem:'center',
    flexDirection:'column'
}

const TodoItem = {
  cursor:'pointer',width:"10rem",height:"3rem",border:"1px solid black",
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    margin:'5px',
    width:'18rem'
}



const DeleteButton = {
    padding: '5px 10px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px'
};

export default function TodoList() {
    const todos=useSelector(state=>state)
    const dispatch=useDispatch();
    const HandleDelete=(id)=>{
           dispatch(DeleteTodo(id))
    }
  return (
    <div style={Container}>
      <div style={TodoContainer}>
      {
        todos && todos.map((e)=>(
           <ToDo e={e} TodoItem={TodoItem} DeleteButton={DeleteButton} HandleDelete={HandleDelete}/>
          ))
      }
      </div>
      </div>
  )
}