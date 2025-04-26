import React from 'react'
import Todo from '../components/todo'
import { useTodos } from '../../hooks'

function TodoPages() {
  const data = useTodos();
  if (!data) {
    return <div className="text-center mt-10">Loading...</div>;
  }
  return (
    <div>
    {data && data.map((task)=>(
     <Todo
               id={task.id}
               title={task.title}
               description={task.description}
               completed={task.completed}
     />))}
 </div>
  )
}

export default TodoPages
