import { useState } from 'react'
// import './App.css'
import Navbar from './Navbar.jsx'
import Todos from './Todos.jsx'
import Footer from './Footer.jsx'
import Addtodos from './Addtodos.jsx'
import { useEffect } from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo= [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("delete", todo)
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const addTodo = (title, desc)=>{
    console.log("i am addtodo",title, desc)
    let id;
    if(todos.length==0){
      id = 0;
    }
    else{
      id = todos[todos.length-1].id+1;
    }
    const myTodo = {
      id : id,
      title :title,
      desc : desc,
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)
  }
    const [todos, setTodos] = useState (initTodo)

    useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])

  return (
    <>
     <Router>
      <Navbar searchbar={true} />
     <div className='container'>
        <Routes>
          <Route exact path="/" element={
            <>
          <Addtodos addTodo={addTodo}  />
          <Todos todos={todos} onDelete={onDelete} />
            </>
        }/>
          <Route exact path="/about" element={<Addtodos addTodo={addTodo}  />} />
        </Routes>
     </div>
      <Footer />
     </Router>
    </>
  )
}

export default App