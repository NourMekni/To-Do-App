import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { CheckTodo, DeleteTodo } from '../Redux/actions/ActionTask'
export default function TodoList() {
    const todos=useSelector(state=>state)
    const dispatch=useDispatch();
    const HandleDelete=(id)=>{
           dispatch(DeleteTodo(id))
    }
  return (
    <div>
      {
        todos && todos.map((e)=>(
        <div key={e.id} style={{cursor:'pointer',width:"10rem",height:"3rem",border:"1px solid black"}} onDoubleClick={()=>dispatch(CheckTodo(e.id))}>
            <span style={{textDecoration:e.check?"line-through":"none"}}>{e.name}</span>
            <button onClick={()=>HandleDelete(e.id)}>delete</button>
        </div>))
      }
    </div>
  )
}
