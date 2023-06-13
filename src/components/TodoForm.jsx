import React from 'react'
import MyButton from './UI/button/MyButton.jsx'
import MyInput from './UI/input/MyInput.jsx'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/todoSlice.js';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  
  const mainStyles = {
    width: '100%',
    display: 'flex',
  }

  function addTodoClick() {
    dispatch(add(text));
    cleanInputValue();
  }

  function cleanInputValue() {
    setText('');
  }

  function isEnterClicked(key) {
    return key.keyCode == 13;
  }

  function buttonClicked(key) {
    if (isEnterClicked(key)) {
      addTodoClick();
    }
  }

  function changedInput(e) {
    const inputValue = e.target.value;
    setText(inputValue);
  }

  return (
    <div onKeyDown={buttonClicked} style={mainStyles}>
      <MyInput 
        type="text"
        placeholder="your todo"
        value={text}
        onChange={changedInput}
      />
      <MyButton onClick={addTodoClick}>add</MyButton>
    </div>
  )
}

export default TodoForm