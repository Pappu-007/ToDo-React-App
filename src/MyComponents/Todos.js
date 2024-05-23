import React from 'react'
import TodoItem from '../MyComponents/TodoItem';

export default function Todos(props) {
  let todosstyle={
    paddingLeft: '50px',
    paddingRight:'50px',
  }
  
  return (
    <div className="container " style={todosstyle}>
      <h1><span className="badge text-bg-secondary">Todos List</span></h1> <hr/>
      {props.todos.length===0? "No todos to dislay" :
      props.todos.map((todo)=>{
        return (
          <>
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr/>
          </>
        )
      })}
      
     
    </div>
  )
}
