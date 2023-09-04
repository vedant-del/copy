import React from 'react'

const Todo = ({todos, onDelete}) => {
  return (
    <>
      <h4>{todos.title}</h4>
      <p>{todos.desc}</p>
      <button className='btn btn-danger btn-sm' onClick={() =>{onDelete(todos)}}>Delete</button>
    </>
  )
}
export default Todo