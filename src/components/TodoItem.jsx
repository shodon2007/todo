import React from 'react'
import styles from './TodoItem.module.scss'
import { useDispatch } from 'react-redux';

import { complete, remove } from '../store/todoSlice.js';

const TodoItem = ({todo, index}) => {
  const dispatch = useDispatch();

  function toggleComplete() {
    dispatch(complete(index));
  }

  function deleteTodo() {
    console.log('delete started')
    dispatch(remove(index));
  }


  function getStringTime() {
    const date = new Date(todo.id);
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  return (
    <div className={styles.todo + ' ' + (todo.complete ? styles.completed : '')} >
        <div className={styles.left} onClick={toggleComplete}>
          {index + 1}. {todo.text}
        </div>
        <div className={styles.right}>
          <div>{getStringTime()}</div>
          <button className={styles.delete} onClick={deleteTodo}>delete</button>
        </div>
    </div>
  )
}

export default TodoItem