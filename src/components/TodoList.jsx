import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem.jsx'

const TodoList = () => {
  const todos = useSelector(state => state.todos)

  function renderTodoList() {
    return todos.map((todo, index) => {
      return <TodoItem todo={todo} index={index} key={todo.id} />
    });
  }

  return (
    <div>
        {renderTodoList()}
    </div>
  )
}

export default TodoList