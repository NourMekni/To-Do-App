import React from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import {CheckTodo} from '../Redux/actions/ActionTask'
export default function ToDo({e,TodoItem,DeleteButton,HandleDelete}) {
    const dispatch=useDispatch();
  return (
    <div>
       <div key={e.id} style={TodoItem} onDoubleClick={()=>dispatch(CheckTodo(e.id))}>
            <span style={{textDecoration:e.check?"line-through":"none",flex:1}}>{e.name}</span>
            <button style={DeleteButton} onClick={()=>HandleDelete(e.id)}>delete</button>
        </div> 
    </div>
  )
}
