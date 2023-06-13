import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from './TodoItem.jsx'
import { complete } from '../store/todoSlice.js';


const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  function toggleComplete(index) {
    dispatch(complete(index));
  }

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