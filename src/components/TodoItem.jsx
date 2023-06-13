import React from 'react'
import styles from './TodoItem.module.scss'

const TodoItem = ({todo, index}) => {
  function getStringTime() {
    const date = new Date(todo.id);
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  return (
    <div className={styles.todo}>
        <div className="left">
          {index + 1}. {todo.text}
        </div>
        <div className={styles.right}>
          <div className="time">{getStringTime()}</div>
          <button className={styles.delete}>delete</button>
        </div>
    </div>
  )
}

export default TodoItem