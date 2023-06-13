import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem.jsx'

const TodoList = () => {
  const todos = useSelector(state => state.todos)

  function renderList() {
    return todos.map(todo => {
      return <TodoItem todo={todo} key={todo.id} />
    })
  }

  return (
    <div>
        {renderList()}
    </div>
  )
}

export default TodoList