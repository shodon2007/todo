import { add, remove, complete } from './store/todoSlice';
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';

const App = () => {
    return <div>
        <TodoForm />
        <TodoList />
    </div>
};

export default App;