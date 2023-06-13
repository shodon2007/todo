import React from 'react'
import MyButton from './UI/button/MyButton.jsx'
import MyInput from './UI/input/MyInput.jsx'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/todoSlice.js';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function addClick() {
    dispatch(add(text));
    setText('')
  }

  return (
    <div onKeyDown={(e) => e.keyCode == 13 && addClick()}>
      <MyInput 
        type="text"
        placeholder="your todo"
        value={text}
        onChange={e => {
            setText(e.target.value);
        }}
      />
      <MyButton onClick={addClick}>Add</MyButton>
    </div>
  )
}

export default TodoForm