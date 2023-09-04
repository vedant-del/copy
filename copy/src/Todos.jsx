import React from 'react'
import Todo from './Todo.jsx'

const Todos = (props) => {
  return (
    <>
      <div className='container'>
        <h3 className='text-center'>Todos List</h3>
        {props.todos.length===0 ? "No Todos to display" : 
        props.todos.map((todos) =>{
            return <Todo todos={todos} key={todos.id} onDelete={props.onDelete}/>
        })}
      </div>
    </>
  )
}
export default Todos